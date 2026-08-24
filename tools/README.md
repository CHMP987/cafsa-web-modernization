# tools/

Chequeo público opcional de URLs (status, `h1`, meta description). No es el producto que se vende.

**Sí:** `node tools/hygiene-check.mjs` → `output/hygiene-report.json` (vía `curl`). Si hay CSV en `data/`, rellena `metrics`; si no, `metrics: null` y un `warning`. `section9` evalúa el done de la spec con el mismo GET; no publica WordPress.

**No:** app, login, scraper de formularios.
