/**
 * Chequeo público (spec §11). Usa curl por el certificado TLS del host.
 * No guarda POST ni archivos de formularios.
 */
import { spawnSync } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";

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
    x[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(),
  );
  const desc = html.match(
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"]*)["']/i,
  );
  return {
    url,
    status,
    ms: Date.now() - started,
    h1Count: h1.length,
    h1,
    hasMetaDescription: Boolean(desc?.[1]),
  };
}

const hygiene = URLS.map(probe);
const report = {
  generatedAt: new Date().toISOString(),
  note: "GET público. No son datos de analítica interna de CAFSA.",
  metrics: null,
  hygiene,
};

const outDir = new URL("../output/", import.meta.url);
await mkdir(outDir, { recursive: true });
const outFile = new URL("hygiene-report.json", outDir);
await writeFile(outFile, JSON.stringify(report, null, 2), "utf8");
console.log(JSON.stringify(report, null, 2));
