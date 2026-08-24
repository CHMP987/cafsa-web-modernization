# Descubrimiento comercial CAFSA

Cómo venderle a CAFSA sin proponer un sitio nuevo.

Sitio revisado: [https://cafsa.fi.cr/](https://cafsa.fi.cr/) (24 ago 2026).

---

## La oferta

No vender un rediseño, un rebuild en Next.js ni un motor de cotización.

Vender una respuesta que ellos todavía no tienen: **¿el sitio público origina crédito, o no?**

Sin ese número, cualquier prototipo es una opinión cara. Con ese número, el siguiente proyecto se vende solo o se cae antes de escribir código.

Frase de cierre:

> Si el web origina, proponemos a qué va el siguiente colón. Si no, no les vendemos un front.

---

## Secuencia (no saltar pasos)

1. **Descubrimiento pagado (2 semanas)** — el producto.
2. **Un experimento en su WordPress** — EGO lo implementa; nosotros diseñamos y reportamos.
3. **Software solo si el experimento gana.**

El repo vacío espera el paso 3.

---

## Producto 1 — Descubrimiento comercial pagado (primero)

CAFSA ya carga Hotjar y Google Analytics en el home (observado el 24 ago 2026). Pedir acceso **de solo lectura**. No pedir un rebuild del sitio.

**Entregable**

- Visitas y leads a `/cotizador-cafsa/` y `/cotizador-enviado/`
- De dónde salen esas sesiones (home, crédito, campañas, ads)
- Qué pasa después de la página de gracias (eso lo tiene que decir Comercial)
- Split aproximado: web vs agencia Purdy vs Expomóvil (eso lo tiene que decir Comercial)

**Esto no es**

- Un mockup visual
- Afirmar que el home “no vende”
- Una auditoría de cumplimiento SUGEF o GDPR

---

## Producto 2 — Un experimento, implementado por EGO

Un solo cambio: un CTA “Cotizar” en el hero que vaya al flujo de cotización **que ya existe** (`/cotizador-cafsa/`). Correrlo unas 4 semanas.

Nosotros diseñamos el experimento y el reporte. EGO lo sube a WordPress. No peleamos la marca.

- Si los leads no se mueven → no hay proyecto de motor de cotización.
- Si los leads se mueven → ahí sí hay proyecto.

---

## Producto 3 — Nota de higiene para Riesgo / Innovación (chico)

Una lista corta de hechos, no el plato fuerte:

- `/test-menu/`, `/test-form-fase2/`, `/step-2/` responden HTTP 200
- `/en/` responde 403 (headers de GTranslate)
- El home no tiene `h1`; hay alts vacíos y links vacíos
- Cookies de terceros (`_ga`, `_gcl_au`, `_hjSession*`) sin banner de consentimiento visto en esa visita

Cobrarlo como nota corta de consultoría. No disfrazarlo de SUGEF ni de GDPR. No revisamos el texto legal.

Posible interlocutor interno: José Paulo Martínez, Operaciones e Innovación, según [Vida y Éxito](https://www.vidayexito.net/aliado-estrategico/cafsa-financiamiento-para-liquidez-y-crecimiento-empresarial/). **No sabemos** si compra sitios web.

---

## A quién no pelear

Mercadeo + [EGO](https://cafsa.fi.cr/) (footer: “POWERED BY EGO MARKETING”). Ya son dueños del look. Entrar por “diseño más moderno” nos convierte en la segunda agencia.

---

## Primera reunión

**Llevar:** una página de hechos medidos (FCP de esa visita, URLs del cotizador en el sitemap, páginas test en 200, inglés 403).

**No llevar:** un prototipo en código, “su home no vende”, un CMP de cookies “para SUGEF”.

**Preguntar tres cosas**

1. ¿Cuántos leads produce el formulario de cotización actual?
2. ¿Quién atiende esos leads y cuál es el SLA?
3. ¿La herramienta de “preaprobar en 30 minutos” de [Delfino, Expomóvil 2025](https://delfino.cr/2025/03/conozca-las-soluciones-financieras-que-encontrara-en-expomovil-2025) es de agencia/feria o vive en `cafsa.fi.cr`? **No lo sabemos.**

---

## No vender ahora

- Next.js / prototipo visual presentado como ayuda a usuarios reales (nunca llega a `cafsa.fi.cr`)
- Simulador público de cuotas
- Chatbot
- Banner de cookies vendido como cumplimiento SUGEF
- App nueva
- Cualquier cosa en `ibanking.cafsa.fi.cr`

---

## Medido vs no demostrado

**Medido (24 ago 2026, home y HTML/headers descargados)**

- WordPress + Elementor + WPBakery + Slider Revolution
- FCP del home ~4.5 s y ~170 scripts en esa sesión de browser (no es CrUX)
- Existen páginas públicas de cotizador; los forms CF7 de crédito redirigen a `/cotizador-enviado/`
- Problemas de accesibilidad e higiene listados en el producto 3

**No demostrado — no decir esto en la sala**

- Que el cotizador no se usa (solo vimos que no está en el hero)
- Que el web origina ~5% de la cartera (ese número se inventó como ejemplo)
- Que EGO “acaba de rediseñar” como proyecto fechado (vimos el footer y subidas de imagen de 2026)
- Que WhatsApp es su canal #1
- Que Riesgo va a tumbar una app nueva en 45 días

Prensa (no es el sitio): [Delfino 2026](https://delfino.cr/2026/04/esta-pensando-en-comprar-vehiculo-en-expomovil-2026-estas-son-las-opciones-de-financiamiento-disponibles) habla de herramientas digitales, cotizaciones en minutos y gestión remota en contexto Expomóvil. No nombra el home público.

---

## Si no hay intro

El trabajo es conseguir 30 minutos con Innovación o Comercial usando la página de hechos, no un mockup.
