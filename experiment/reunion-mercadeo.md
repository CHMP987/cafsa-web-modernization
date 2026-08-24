# Reunión Mercadeo / agencia WP

Brief para el dueño de Elementor. Este repo no hace deploy.

## Quién hace qué (spec §7)

| Trabajo | Nosotros | CAFSA / agencia |
| --- | --- | --- |
| Spec, briefs, preview, chequeo público | Ya está en el repo | Aprueban qué se pega |
| Pegar bloques en Elementor | Solo si dan usuario WP | Sí (si no hay acceso) |
| Test URLs, toggle inglés, Maps del home | Esta lista y `higiene-wp.md` | Ellos en WP/hosting |
| Slides del carousel | No se borran desde aquí | Dicen cuáles no se tocan |
| GTM `hero_cotizar_click` | Nombre en `gtm-events.json` | Ellos pegan |

## Pegar (spec §10 y §14)

1. Home: `cta-hero.html` — texto `Cotizar`, destino `/cotizador-cafsa/`. No tapar CAFSA en Línea.
2. Si Mercadeo no deja el hero: barra debajo del carousel (44px).
3. Si no: solo en `/personas/credito/` (el home no cumple el done §9.1).
4. Crédito: un H1, resto H2, mismo Cotizar. Ver `pagina-credito.md`.
5. Higiene: casillas de `higiene-wp.md`. Inglés 403 a propósito → ocultar el toggle, no traducir mal.

## Preguntas abiertas (spec §16)

No están respondidas. No se cierran en código.

1. ¿Quién aprueba un botón en el hero y qué slides no se tocan?
2. ¿Nos dan usuario WP/Elementor o solo este brief?
3. ¿Inglés: traducir o esconder el toggle?
4. ¿GTM lo pega alguien interno?
5. ¿Nombre oficial del H1 de crédito (prendario vs otros productos en la misma URL)?

Done = los seis puntos de la spec §9 en `cafsa.fi.cr`, no esta carpeta.
