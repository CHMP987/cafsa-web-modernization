# data/

Export GA4 (u otro) **si CAFSA lo entrega**. El brief de WordPress no espera este archivo.

**Sí:** CSV real, gitignored. Columnas flexibles: `page` (o `ruta` / `path`), `sessions` (o `sesiones`), `conversions` (o `conversiones`). `node tools/hygiene-check.mjs` suma filas cuya ruta contenga `/cotizador-cafsa` o `/cotizador-enviado` y las escribe en `output/hygiene-report.json` → `metrics`.

**No:** leads inventados, conector automático a su GA, ni CSV de ejemplo con números fingidos. Sin archivo: `metrics` queda `null`.
