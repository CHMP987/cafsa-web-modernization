# Evaluación del sitio: Barceló San José

- **URL evaluada:** [https://www.barcelo.com/en-ww/barcelo-san-jose/](https://www.barcelo.com/en-ww/barcelo-san-jose/)
- **Origen del tráfico:** anuncio de Google Ads (campaña CPC `8064834656`, `id_hotel_sem=7290`)
- **Locale:** `en-ww` (English — Worldwide)
- **Fecha de evaluación:** 24 de agosto de 2026
- **Alcance:** ficha de hotel / landing de reserva; revisión de contenido, UX, conversión, SEO de pago y accesibilidad aparente. No se realizó una reserva ni se introdujeron datos personales.

## Veredicto

**7.5 / 10.** El diseño, el buscador y el flujo de disponibilidad funcionan. Lo que falla es la consistencia de la información, no tanto la tecnología.

La URL de origen es un anuncio de Google Ads. La página destino es correcta para esa intención: hotel concreto, no un listado genérico.

---

## Lo que funciona bien

- **Carga rápida** (~2–3 s) y fotos de calidad en hero, habitaciones e instalaciones.
- **Widget de reserva usable:** calendario, huéspedes y “Check availability” llevan a selección de habitación. Con fechas de prueba (31 ago–2 sep 2026, 2 adultos) el flujo sí funcionó.
- **Navegación clara:** Hotel, Rooms, Map, Offers, Facilities, Photos, Comments, FAQs. Las pestañas se quedan fijas al hacer scroll.
- **Prueba social:** 4.0/5 y ~3.250 reseñas, certificados (CST, Safe Travels, Esencial Costa Rica) y contacto visible.
- **Cookies:** modal con Settings / Disagree / Agree; no es agresivo.
- **Poco ruido competitivo:** no hay banners fuertes de otros hoteles (El Cairo, Estambul, Dubái) que desvíen de *este* hotel.
- **Galería organizada** por categorías (habitaciones, gastronomía, reuniones, gimnasio, piscinas, bodas, instalaciones).
- **Mapa de ubicación** interactivo y datos de distancias a aeropuerto, playas y campo de golf.

---

## Problemas graves de contenido

### 1. Textos rotos (plantillas sin datos)

En el HTML aparecen cadenas vacías, típicas de CMS sin variables:

- *“The is not available from of to of”*
- *“Availability from of”*
- *“Hotel closed according to season or refurbishment”* sin fechas

En el navegador, con fechas válidas, a veces no se ven. Siguen en el markup: mal para SEO, traducción y lectores de pantalla.

### 2. Datos contradictorios

| Dato | Lo que dice la página | Conflicto |
|---|---|---|
| Categoría | “5-star” / `*****` en el copy | Expedia y otros OTAs lo tratan como 4 estrellas; la ficha muestra **4** junto a 3250 reviews |
| Salas de reuniones | 17 meeting rooms (cuerpo y bodas) | FAQ: **15 meeting rooms y 17 áreas** |
| Distancia al aeropuerto | 13 km en el texto | 14.3 km en Location |
| Precio “from” | $67/noche en hero | Con fechas reales subió a ~$110/noche |

Para un viajero de negocios o de eventos, el número de salas es un dato de decisión. Si no cuadra, la página pierde credibilidad.

### 3. Precio de ancla engañoso

El anuncio y el hero venden **From $67**. Al elegir fechas concretas el precio salta. Es legal si es “desde”, pero en SEM genera sensación de cebo: el `gclid` llega con una expectativa de precio que la ficha no sostiene.

---

## UX y conversión

### Fortalezas

- Varios CTA “Check availability”.
- Habitaciones con foto, m², ocupación y amenities.
- Programa my Barceló (mejor precio, flexibilidad, descuentos por estancias).

### Fricción

- El widget de reserva desaparece al bajar; el CTA inferior es débil. Falta una barra sticky de fechas/precio.
- Premium Level se promociona, pero el acceso depende de categoría de habitación: no está lo bastante claro junto al precio.
- “Best Price Guaranteed” está en el markup, poco visible como sello de confianza.
- La oferta Summer Offers muestra un countdown en **00d, 00h, 00m, 00s** si el timer falla: parece caducada aunque las fechas de reserva siguen vigentes (book before 22-09-2026).

### Copy comercial

El lead *“Who wouldn’t want to spend the perfect holiday in a paradise like Costa Rica?”* vende destino de playa/naturaleza. El hotel es **urbano en La Uruca**, a 5 km del centro, con convenciones y estadio. El mensaje y el producto no coinciden: más sentido para ocio de paso o MICE que para “paraíso”.

---

## SEO y tráfico de pago

La URL es típica de Google Ads (`utm_source=google`, `gclid`, `id_hotel_sem=7290`). La landing es la ficha correcta.

Puntos débiles:

- Title: `Barceló San José ➡️ Hotel in Costa Rica| From 67$` — el emoji y el precio volátil no son ideales.
- Contenido duplicado casi idéntico en `en-ww` y `en-us` ($67 vs $75).
- Textos rotos indexables.
- Keyword del anuncio: “barceló san josé” — coincidencia alta con la página; el riesgo no es relevancia, es **calidad de la experiencia post-clic** (precio, copys rotos).

---

## Accesibilidad (impresión, no auditoría WCAG)

- Hay botón de accesibilidad flotante.
- Contraste general aceptable; hay gris claro sobre blanco dudoso.
- Flechas de carrusel solo-icono, sin etiqueta clara.
- Los strings “The is not available from of…” son un problema serio para lectores de pantalla.
- No se realizó una auditoría completa (lector de pantalla, teclado exclusivo, analizador de contraste).

---

## Contenido vs. realidad operativa

Lo que la web promete y lo que OTAs/huéspedes matizan:

- **Shuttle al aeropuerto:** la FAQ dice reserva previa gratuita. En Booking/Expedia el patrón real es **avisar 36–48 h antes**, horarios cada 2 h, y quejas de no-shows. Eso debería estar en la ficha, no solo “free booking”.
- **Desayuno:** no está incluido en solo alojamiento; sí en BB/media pensión. Fácil de malinterpretar junto al precio “from”.
- **Mascotas:** no; perros de asistencia sí. Bien explicado.
- **Spa:** mínimo 18 años y de pago, pero la FAQ también dice que los niños son bienvenidos: contradictorio.
- Habitaciones “renovadas en 2016”: para un 5\* en 2026 suena antiguo si no hay una oleada más reciente.

---

## Prioridades si fueras el dueño de la página

1. Unificar estrellas, nº de salas, km al aeropuerto y política de spa.
2. Quitar o rellenar las plantillas vacías (`from of to of`).
3. Anclar el precio de Ads al mismo “from” que muestra el buscador con fechas por defecto, o mostrar rango.
4. Barra sticky de reserva + sello de mejor precio más visible.
5. Condiciones reales del transfer (antelación, frecuencia) en la FAQ y junto al CTA.
6. Reescribir el lead: hotel urbano/MICE en San José, no “paraíso tropical”.
7. Arreglar el countdown de ofertas en `00:00:00`.

---

## Conclusión

En conjunto: **buena máquina de reserva, contenido poco cuidado**. Para un clic de Google Ads caro, el mayor riesgo no es que no se pueda reservar, sino que el usuario no se fíe del precio ni de los datos del hotel.
