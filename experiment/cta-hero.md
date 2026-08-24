# Brief: CTA Cotizar en el home

Para: Mercadeo / agencia WordPress (Elementor).  
No se publica desde este repo.

## Qué hacer

- Añadir un botón o enlace visible **Cotizar**.
- Destino: `https://www.cafsa.fi.cr/cotizador-cafsa/` (el CF7 actual; no crear otro form).
- Texto exacto: `Cotizar`.
- El H1 del home debe ser el mensaje del hero (p. ej. soluciones de movilidad), no “POWERED BY…” ni un H6 de agencia.
- Recorte listo: `cta-hero.html`.

## Dónde (en este orden, si Mercadeo bloquea el hero)

1. Sobre o junto al copy del slide activo.
2. Si no: barra debajo del carousel, ancho completo, 44px de alto mínimo.
3. Si no: solo en `/personas/credito/` (entonces el home no cumple el done de la spec §9 punto 1).

## Qué no hacer

- Borrar slides del carousel sin autorización.
- Tapar o quitar **CAFSA EN LÍNEA**.
- Cambiar logo, colores o foto.
- Prometer en el botón “aprobación en minutos” ni tasas.

## Evento (opcional, ellos en GTM)

`hero_cotizar_click` con `cta_location: hero`. Ver `gtm-events.json`.
