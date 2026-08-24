/**
 * Chequeo público (spec §11–§13). Usa curl por el certificado TLS del host.
 * GET solo a la lista de la spec. No guarda POST ni archivos de formularios.
 * metrics: solo si hay CSV en data/; si no, null (no se inventan cifras).
 * section9: los seis puntos del done, leídos del HTML público. No publica WordPress.
 */
import { spawnSync } from "node:child_process";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";

const URLS = [
  "https://www.cafsa.fi.cr/",
  "https://www.cafsa.fi.cr/personas/credito/",
  "https://www.cafsa.fi.cr/cotizador-cafsa/",
  "https://www.cafsa.fi.cr/cotizador-enviado/",
  "https://www.cafsa.fi.cr/en/",
  "https://www.cafsa.fi.cr/test-menu/",
  "https://www.cafsa.fi.cr/test-form-fase2/",
  "https://www.cafsa.fi.cr/step-2/",
];

const HOME = "https://www.cafsa.fi.cr/";
const CREDITO = "https://www.cafsa.fi.cr/personas/credito/";
const EN = "https://www.cafsa.fi.cr/en/";
const TEST = [
  "https://www.cafsa.fi.cr/test-menu/",
  "https://www.cafsa.fi.cr/test-form-fase2/",
  "https://www.cafsa.fi.cr/step-2/",
];

const dataDir = new URL("../data/", import.meta.url);
const outDir = new URL("../output/", import.meta.url);

function stripTags(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function cotizarAnchors(html) {
  return [...html.matchAll(/<a\b[^>]*href=["'][^"']*cotizador-cafsa[^"']*["'][^>]*>([\s\S]*?)<\/a>/gi)].map(
    (m) => stripTags(m[1]),
  );
}

function robotsMeta(html) {
  const m = html.match(
    /<meta[^>]+(?:name=["']robots["'][^>]+content=(["'])([\s\S]*?)\1|content=(["'])([\s\S]*?)\3[^>]+name=["']robots["'])/i,
  );
  const value = (m?.[2] || m?.[4] || "").replace(/\s+/g, " ").trim();
  return value.slice(0, 120).toLowerCase();
}

function bannerAlt(html) {
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const banner = imgs.find((t) => /banner-inicio|rev-slide|slider/i.test(t));
  if (!banner) return { found: false, empty: true };
  const alt = banner.match(/\balt=["']([^"]*)["']/i);
  const value = alt ? alt[1].trim() : "";
  return { found: true, empty: value.length === 0, alt: value || null };
}

function probe(url) {
  const started = Date.now();
  const r = spawnSync(
    "curl",
    ["-sL", "--max-time", "30", "-w", "\n__HTTP_STATUS__:%{http_code}", url],
    { encoding: "utf8", maxBuffer: 3_000_000 },
  );
  if (r.error) {
    return { url, error: r.error.message, ms: Date.now() - started };
  }
  const out = r.stdout || "";
  const m = out.match(/\n__HTTP_STATUS__:(\d+)\s*$/);
  const status = m ? Number(m[1]) : null;
  const html = m ? out.slice(0, m.index) : out;
  const h1 = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((x) =>
    stripTags(x[1]),
  );
  const desc = html.match(
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"]*)["']/i,
  );
  const locale = html.match(
    /<meta[^>]+property=["']og:locale["'][^>]+content=["']([^"]*)["']/i,
  );
  return {
    url,
    status,
    ms: Date.now() - started,
    h1Count: h1.length,
    h1,
    hasMetaDescription: Boolean(desc?.[1]),
    ogLocale: locale?.[1] || null,
    hasCotizarCta: cotizarAnchors(html).some((t) => /^cotizar$/i.test(t)),
    hasMaps: /maps\.googleapis\.com|maps\.google\.com|google\.com\/maps/i.test(html),
    hasRecaptcha: /recaptcha/i.test(html),
    hasEnglishToggle: /gtranslate|hreflang=["']en|\/en\/|english/i.test(html),
    robotsMeta: robotsMeta(html),
    bannerAlt: bannerAlt(html),
  };
}

function findUrl(probes, url) {
  return probes.find((p) => p.url === url) || {};
}

function testUrlOk(p) {
  if ([401, 403, 404, 410].includes(p.status)) return true;
  return p.status === 200 && /noindex/.test(p.robotsMeta || "");
}

function section9(probes) {
  const home = findUrl(probes, HOME);
  const credito = findUrl(probes, CREDITO);
  const en = findUrl(probes, EN);
  const tests = TEST.map((u) => findUrl(probes, u));

  const p1 = {
    pass: Boolean(home.hasCotizarCta),
    note: "Enlace con texto Cotizar a /cotizador-cafsa/ en el HTML. No prueba que esté en el hero.",
  };
  const p2 = {
    pass: credito.h1Count === 1 && Boolean(credito.hasCotizarCta),
    h1Count: credito.h1Count ?? null,
    hasCotizarCta: Boolean(credito.hasCotizarCta),
  };
  const p3 = {
    pass: tests.every(testUrlOk),
    urls: tests.map((t) => ({
      url: t.url,
      status: t.status ?? null,
      robotsMeta: t.robotsMeta || "",
    })),
  };
  const p4 = {
    pass: (home.h1Count || 0) >= 1 && home.bannerAlt?.found && !home.bannerAlt.empty,
    h1Count: home.h1Count ?? null,
    bannerAlt: home.bannerAlt || null,
  };
  const enContent =
    en.status === 200 && !(en.h1 || []).some((t) => /you have been blocked/i.test(t));
  const p5 = {
    pass: enContent,
    enStatus: en.status ?? null,
    hasEnglishToggleOnHome: Boolean(home.hasEnglishToggle),
    note: "Pasa si /en/ responde 200 con contenido. Un 403 no se da por bueno: el toggle puede estar en JS o ser una imagen.",
  };
  const p6 = {
    pass: home.hasMaps === false,
    hasMaps: Boolean(home.hasMaps),
    hasRecaptcha: Boolean(home.hasRecaptcha),
  };

  const items = [p1, p2, p3, p4, p5, p6];
  return {
    pass: items.every((x) => x.pass),
    note: "Evaluado con GET público. No es publicación en WordPress ni certificado legal.",
    homeCotizar: p1,
    creditoUnH1: p2,
    testUrls: p3,
    homeH1Alt: p4,
    ingles: p5,
    mapsFueraDelHome: p6,
  };
}

function colIndex(headers, names) {
  return headers.findIndex((h) => names.includes(h));
}

function parseCsv(text) {
  const lines = text.replace(/^\uFEFF/, "").trim().split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return null;
  const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
  const pageIdx = colIndex(headers, ["page", "ruta", "path", "landingpage"]);
  const sessIdx = colIndex(headers, ["sessions", "sesiones", "session"]);
  const convIdx = colIndex(headers, ["conversions", "conversiones", "conversion"]);
  if (pageIdx < 0) return null;

  const rows = [];
  for (const line of lines.slice(1)) {
    const cols = line.split(",");
    const page = (cols[pageIdx] || "").trim();
    if (!/cotizador-cafsa|cotizador-enviado/i.test(page)) continue;
    const sessions = sessIdx < 0 ? 0 : Number(cols[sessIdx]) || 0;
    const conversions = convIdx < 0 ? 0 : Number(cols[convIdx]) || 0;
    rows.push({ page, sessions, conversions });
  }
  return {
    pages: rows,
    sessions: rows.reduce((n, r) => n + r.sessions, 0),
    conversions: rows.reduce((n, r) => n + r.conversions, 0),
  };
}

async function readMetrics() {
  let names;
  try {
    names = await readdir(dataDir);
  } catch {
    return {
      metrics: null,
      warning: "No hay carpeta data/; metrics queda null. No se inventan cifras de CAFSA.",
    };
  }

  const csvs = names.filter((n) => n.toLowerCase().endsWith(".csv"));
  if (csvs.length === 0) {
    return {
      metrics: null,
      warning: "Sin CSV de CAFSA en data/; metrics queda null. No se inventan cifras.",
    };
  }

  const pages = [];
  for (const name of csvs) {
    const text = await readFile(new URL(name, dataDir), "utf8");
    const parsed = parseCsv(text);
    if (!parsed) {
      return {
        metrics: null,
        warning: `El CSV ${name} no tiene columna page/ruta/path. metrics queda null.`,
      };
    }
    pages.push(...parsed.pages);
  }

  return {
    metrics: {
      source: csvs,
      pages,
      sessions: pages.reduce((n, r) => n + r.sessions, 0),
      conversions: pages.reduce((n, r) => n + r.conversions, 0),
    },
    warning: null,
  };
}

const probes = URLS.map(probe);
const hygiene = probes.map((p) => ({
  url: p.url,
  status: p.status ?? null,
  ms: p.ms,
  h1Count: p.h1Count ?? 0,
  h1: p.h1 || [],
  hasMetaDescription: Boolean(p.hasMetaDescription),
  ...(p.error ? { error: p.error } : {}),
}));
const { metrics, warning } = await readMetrics();
const report = {
  generatedAt: new Date().toISOString(),
  note: "GET público. No son datos de analítica interna de CAFSA salvo CSV en data/. section9 no certifica SUGEF ni WCAG.",
  metrics,
  warning,
  section9: section9(probes),
  hygiene,
};

await mkdir(outDir, { recursive: true });
const outFile = new URL("hygiene-report.json", outDir);
await writeFile(outFile, JSON.stringify(report, null, 2), "utf8");
console.log(JSON.stringify(report, null, 2));
