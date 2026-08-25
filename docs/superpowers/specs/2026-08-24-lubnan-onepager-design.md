# Lubnan: propuesta de sitio (tarjeta de negocio)

**Fecha:** 24 ago 2026  
**Estado:** implementado (one-pager en `/`, `npm run dev`)  
**Objetivo:** Un demo `noindex` que WWebs muestra al dueño: “así se ve un sitio oficial *suyo*”, usando su marca y su carta ya existente (Oddmenu), sin clonarla.

## Qué se vende (y qué no)

Lubnan ya tiene QR/carta (Oddmenu), Instagram, Facebook y TripAdvisor. El hueco es más estrecho que “no tienen web”:

- Un dominio que Google pueda tratar como sitio oficial
- Horario real (lunes cerrado)
- Dos canales distintos: fijo 2257 6071 vs WhatsApp 8660 0707

El demo es una **tarjeta de negocio**, no un segundo Oddmenu ni una plantilla “institución burgundy”.

## Correcciones respecto al spec anterior

| Error | Corrección |
| --- | --- |
| Look burgundy / serif “institución” | Marca Oddmenu: acento `#b80a0a`, logo “I ❤️ LUBNAN”, foto del comedor. Sans (estilo Rubik). |
| Highlights con precios Oddmenu | Cero precios en el one-pager. Fotos + **Ver la carta** → Oddmenu. |
| JSON-LD + Vercel indexable | `noindex, nofollow`. Sin schema. Banner visible: propuesta, no sitio oficial. |
| Historia genérica de 80 palabras | Solo copy que ellos ya publicaron (tagline Oddmenu). Nada de *Apetito*. |
| Torre Mercedes vs Scotiabank | Dirección y mapa de Oddmenu. En la reunión se confirma el letrero. |
| Next.js de 7 secciones | Tres bloques: Hero, Carta (enlace), Visítanos. Sticky WhatsApp. |

## Audiencia e idioma

- Copy en pantalla: español. `lang="es"`.
- Acción principal: WhatsApp `8660 0707`.
- Llamar: solo el fijo `2257 6071`.
- Sin toggle de inglés.

## Criterios de éxito

1. En el celular se entiende qué es, dónde está, que el lunes está cerrado, y se toca **Reservar por WhatsApp**.
2. WhatsApp → `wa.me/50686600707`. Llamar → `tel:+50622576071`. Los dos no se mezclan. Funciona sin JavaScript.
3. Se reconoce como Lubnan (rojo, logo, foto del local), no como steakhouse genérico.
4. La carta vive en Oddmenu. El one-pager no muestra precios.
5. `robots: noindex, nofollow`. Sin JSON-LD.
6. Desktop y móvil. Header: Carta abre Oddmenu; Visítanos ancla a `#visitanos`.

## Estructura (una ruta `/`)

Header: logo/nombre · Paseo Colón · Reservar (WhatsApp).  
Cinta superior visible: **Propuesta de WWebs — no es el sitio oficial.**

1. **Hero** — Foto interior Oddmenu (`afa810da-…jpeg`). Logo recortado. Tagline de ellos: *Desde el mediterráneo de Beirut a tu mesa. Lo mejor de la comida libanesa tradicional te espera!* CTA: **Reservar por WhatsApp**. Secundario: **Ver la carta**.
2. **Carta** — En la home: 4 fotos sin precio. **Ver la carta** abre Oddmenu (`https://oddmenu.com/es/p/ilovelubnan`). No hay `/carta` propia. `/carta` redirige a Oddmenu por si quedó un enlace viejo.
3. **Visítanos** — Dirección Oddmenu, horario (lunes cerrado), llamar, WhatsApp, mapa (link Oddmenu).
4. **Footer** — WhatsApp, llamar, Facebook, Instagram, Oddmenu. Otra vez: propuesta WWebs.

**Sticky móvil:** `#b80a0a`, texto blanco, solo WhatsApp.

Sin sección Historia. Sin lista de 8–12 platos con precio. Sin delivery. Sin i18n.

## Sistema visual

- Acento: `#b80a0a` (themeColor Oddmenu). CTAs y sticky.
- Fondo: papel claro / blanco. Texto casi negro.
- Tipo: sans (Rubik o equivalente). El logo ya trae la voz de marca; no añadir serif de “fine dining”.
- Foto hero: interior real. No overlay tan oscuro que mate el ladrillo.
- Fotos de comida: las 4 de Oddmenu, sin Unsplash.
- Sin gradientes, sombras, emojis extra (el corazón del logo sí, es de ellos).

## Contenido

Todo en `lib/content.ts`. Catálogo de referencia (no se pinta entero): `docs/superpowers/specs/lubnan-oddmenu-catalog.md`.

| Campo | Valor |
| --- | --- |
| Nombre | Restaurante Lubnan |
| Tagline | Desde el mediterráneo de Beirut a tu mesa… (Oddmenu) |
| Dirección | Paseo Colón, diagonal al Scotiabank, San José, Costa Rica |
| Mapa | https://maps.app.goo.gl/Cdthevu3SgXHhZkB7 |
| Teléfono | +506 2257 6071 — `tel:` solamente |
| WhatsApp | +506 8660 0707 — `https://wa.me/50686600707` |
| Carta | https://oddmenu.com/es/p/ilovelubnan |
| Facebook | https://www.facebook.com/lubnancr |
| Instagram | https://www.instagram.com/lubnancr |
| Horario | tabla abajo |
| Fotos | CloudFront Oddmenu (hero + 4 platos). No hotlink masivo de 67 imágenes. |

Horario:

| Día | Horario |
| --- | --- |
| Lunes | Cerrado |
| Martes | 11:00–15:00 y 18:00–21:00 |
| Miércoles | 11:00–15:00 y 18:00–21:00 |
| Jueves | 11:00–22:00 |
| Viernes | 11:00–15:00 y 18:00–22:00 |
| Sábado | 12:00–16:00 y 18:00–21:00 |
| Domingo | 11:00–17:00 |

Prefill WhatsApp: `Hola, quisiera reservar una mesa en Lubnan.`

Fotos de la sección Carta (sin precio en UI):

- Hummus — `crop-2fedf603-7bdb-483b-a158-38e057d31536.jpeg`
- Kibbeh — `crop-5d28c3d7-8711-4b4b-9a0c-63fd8996113b.jpeg`
- Costillas de Cordero — `crop-1bfb25dd-337c-40eb-8d70-13ea1fb7163c.jpeg`
- Mixtura Lubnan — `crop-dca70e1c-3a3f-4706-865a-ae2e91a2c281.jpeg`

Base: `https://dyj6gt4964deb.cloudfront.net/images/`

## Arquitectura técnica

- Next.js (App Router) + TypeScript + Tailwind, o HTML estático equivalente. Sin CMS.
- `<html lang="es">`.
- `app/layout.tsx`: `robots: { index: false, follow: false }` y meta `noindex, nofollow`.
- Componentes: `Header`, `Hero`, `MenuTeaser`, `Visit`, `Footer`, `WhatsAppBar`.
- Mapa: enlace a Google Maps (el de Oddmenu). Iframe opcional; si no carga, queda el link.
- WhatsApp y tel: `<a href>` planos.
- **Sin JSON-LD.** Schema solo el día que el dominio sea de ellos y pidan indexar.
- Preview Vercel no se envía a Search Console. No enlazar desde un sitio indexado.

### Errores

- Imagen rota: no hunde el layout; `alt` en español.
- Oddmenu caído: el botón de carta sigue siendo un link; no hay menú de respaldo con precios viejos.

### Verificar

- Móvil y desktop.
- WhatsApp = 86600707, llamar = 22576071.
- View-source / headers: noindex.
- No hay ₡ ni precios en la UI.
- Clic “Ver la carta” abre Oddmenu.

## Fuera de alcance

Precios en el one-pager, carta completa, JSON-LD, indexación, copy de *Apetito*, burgundy/serif institución, i18n, reservas online, Uber Eats, CMS, Unsplash.

## Pitch (conversación, no la página)

“Ustedes ya tienen la carta en Oddmenu. Lo que falta es un sitio oficial: Google deja de mandar a Facebook, el lunes aparece cerrado, y el WhatsApp de reservas no se confunde con el fijo. Esta URL es una propuesta; no está al aire.”
