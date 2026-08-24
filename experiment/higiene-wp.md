# Checklist de higiene (WordPress)

Criterio de hecho: spec §9. Se marca en `cafsa.fi.cr`, no en este repo.

`node tools/hygiene-check.mjs` escribe `section9` en `output/hygiene-report.json` (GET a las URLs de la spec). `pass: false` significa que WordPress aún no está hecho. No tachar esta lista solo porque exista el JSON.

## Home

- [ ] Un `h1` = copy del hero.
- [ ] Banner principal con `alt` descriptivo (no vacío).
- [ ] Enlaces del header con texto o `aria-label` (no `<a href="#">` vacíos).
- [ ] Skip link a `#main` y un `<main>` (o role) alrededor del contenido.
- [ ] CTA Cotizar a `/cotizador-cafsa/` (ver `cta-hero.md`).
- [ ] Google Maps **no** carga en esta plantilla (sí en sucursales).
- [ ] reCAPTCHA no carga hasta abrir un form (si el home no tiene form, no debe ir).
- [ ] Yoast: meta description propia; `og:locale` `es_CR`.
- [ ] Foco visible en enlaces/botones; tap ≥ 44px en Cotizar.

## Crédito

- [ ] Un solo H1 (ver `pagina-credito.md`).
- [ ] Meta description.
- [ ] CTA Cotizar.

## URLs de prueba

- [ ] `/test-menu/` — 404, privado o `noindex,nofollow`.
- [ ] `/test-form-fase2/` — igual.
- [ ] `/step-2/` — igual.

## Inglés

- [ ] `/en/` responde 200 con contenido **o** el toggle English no se muestra.
- [ ] No dejar el toggle si sigue en 403.

## SEO técnico

- [ ] Sitemap Yoast en `https://` (no `http://`).
- [ ] `robots.txt`: misma URL https del sitemap.

## Fuera de esta lista

Cumplimiento SUGEF/7600/8968, Lighthouse 90, más leads. No marcar como done.
