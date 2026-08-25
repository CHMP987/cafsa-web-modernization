# Costa Rica restaurants with obsolete websites

Audit of official sites for established restaurants (not global franchises). Use this file as a lead list for future web projects.

- **Review date:** 24 Aug 2026
- **Score:** 1–10 measures digital lag, not food quality
- **Canvas (interactive):** [restaurantes-web-obsoleta.canvas.tsx](C:\Users\jvr09\.cursor\projects\c-Users-jvr09-OneDrive-Documentos-cafsa-web\canvases\restaurantes-web-obsoleta.canvas.tsx)

## Criteria

A site was flagged if it showed one or more of:

- Static HTML from the 2000s–2010s (`.htm` / `.html` pages, table layouts)
- Image-based navigation (JPG/PNG used as buttons)
- Frozen copyright (2012, 2018)
- Broken video / Flash-era media
- Domain down (timeout, 500, 503)
- No owned site — Facebook only

**Included:** restaurants with 10–50 years of history, own venues, and mentions in local guides or directories.

**Excluded:** already-modern peers (Silvestre, La Divina Comida, Il Piaceri, Ronny’s Place 2024, Mirador Tiquicia, Grano de Oro) and global chains (McDonald’s, KFC, Domino’s). Vishnu downtown was left out because of closure reports.

## Snapshot

| Metric | Count |
| --- | ---: |
| Documented cases | 17 |
| Live but outdated site | 9 |
| Domain down or unreachable | 5 |
| No owned website | 3 |

Almost all cases sit in the Greater Metropolitan Area (GAM). Beach/tourism peers have often already rebuilt; the extreme coastal case is Tree Tops in San Juanillo.

## Commercial priority

Three repeating profiles:

1. San José fine dining / steakhouse still on ~2008 HTML
2. Local chains with a 2018 image collage as “the website”
3. Institutions whose domain no longer resolves

### 1. La Esquina de Buenos Aires — score 10

San José centro · Argentine grill · still a destination

The clearest case. Menu split into `.htm` files, HTML tables instead of CSS, broken video (“Tu navegador no soporta esta caracteristica”). No usable mobile layout or reservation flow.

- Site: https://laesquinadebuenosaires.net/

### 2. La Princesa Marina — score 9

GAM · seafood chain since the 1980s · 4 locations (Sabana, Curridabat, Moravia, Alajuela)

The site is a collage of JPGs and a 2018 copyright. One redesign covers four branches plus delivery.

- Site: https://www.princesamarina.com/

### 3. Enjoy Group — Bacchus and L’ile de France — score 8

Santa Ana (Casa Quitirrisí) and Avenida Escazú · 40+ years · hotel–restaurant group

Fine dining served by loose `.html` pages and an almost empty homepage. The group also runs PF Chang’s and hotels; the own-brand vitrine lagged behind. OpenTable menu note: Feb 2022. Some group reservation links still point to `2021-03-26`.

- Bacchus: https://www.enjoyrestaurants.net/bacchus.html
- L’ile de France: https://www.enjoyrestaurants.net/lile.html

## Full list

Sorted by digital-lag score (high to low). Status: **obsolete** = live but dated; **down** = timeout / 500 / 503; **no site** = social only.

### Obsolete (live site)

| Restaurant | Cuisine | Area | Founded / notes | Score | URL | Findings |
| --- | --- | --- | --- | ---: | --- | --- |
| La Esquina de Buenos Aires | Argentine grill | San José centro | 2000s · still a reference | 10 | https://laesquinadebuenosaires.net/ | `.htm` pages, table-based menu, broken video. Static ~2008 look. |
| Tree Tops Inn (restaurant) | Gourmet / B&B | San Juanillo, Guanacaste | Open to the public for lunch and dinner | 10 | https://costaricatreetopsinn.com/ | Table layout, 1990s nav bar, webmaster at @rogers.com. |
| Taj Mahal (Spanish site) | Indian | Escazú (flagship since 2002) | 2002 · 4 GAM locations | 9 | https://www.thetajmahalrestaurant.com/espanol/index.html | Static HTML, PNG ornaments, “Gallería”, TripAdvisor certificates 2012–2017. Split presence: newer English site at https://www.taj.cr/ |
| La Princesa Marina | Seafood | Sabana, Curridabat, Moravia, Alajuela | 1980s · national chain | 9 | https://www.princesamarina.com/ | JPG navigation (banners, locations, menu). Copyright 2018. One-page image site for 4 restaurants. |
| Enjoy Group — Bacchus | Artisan Italian | Santa Ana (Casa Quitirrisí) | Group 40+ years | 8 | https://www.enjoyrestaurants.net/bacchus.html | Loose `.html` pages, nearly empty home. Heritage house; site does not match the venue. |
| Enjoy Group — L’ile de France | French | Avenida Escazú | 40+ years | 8 | https://www.enjoyrestaurants.net/lile.html | Same static template. OpenTable menu stale (Feb 2022). Group reserve links with 2021 dates. |
| Hotel Isla Verde | Cantonese Chinese + hotel | Pavas, San José | 1996 · family business | 8 | https://www.hotelislaverdecostarica.es/ | `.es` domain for a Costa Rica hotel. “Nimbus 1.0” template. Decade-old brochure copy. |
| Restaurante Isla Verde | Chinese | Pavas, San José | 1996 | 7 | https://restauranteislaverde.com/ | Copyright “2012 -”. “Loading…” text and embedded video the browser cannot play. Separate from the hotel site; both dated. |
| Tin Jo | Pan-Asian (several rooms) | San José centro | 1972 · downtown icon | 6 | https://tinjo.com/ | Working WordPress with 2010s IA: glued titles (“EventosPrivados”, “LoQueHacemos”), generic TableBooking widget, repetitive SEO. |

### Domain down

| Restaurant | Cuisine | Area | Founded / notes | Score | URL | Findings |
| --- | --- | --- | --- | ---: | --- | --- |
| Machu Picchu | Peruvian | Paseo Colón and San Pedro | First Peruvian restaurant in CR (~22+ years) | 9 | http://www.restaurantemachupicchu.com/ | Domain still listed in directories; homepage timed out. No live web vitrine. |
| Restaurante Lukas | Steak / typical | El Pueblo, Barrio Tournón | El Pueblo classic | 8 | http://www.lukascr.com/ | 503. Still listed with phone 2233-8145. High tourist traffic, no working site. |
| Chubascos | Costa Rican typical | Fraijanes (Poás volcano road) | 1982 | 8 | http://chubascos.co.cr/ | Historic domain without SSL (HTTP), now 503. Classic Poás stop; depends on Facebook and third-party listings. |
| Soda Tapia | Soda / Tico diner | Sabana Sur, Santa Ana, Alajuela | 30+ years · several branches | 7 | https://sodatapia.com/ | `@sodatapia.com` email exists; public domain returned 500. Listings call Facebook (TapiaSabana) the “official site”. |
| Antojitos San Pedro | Mexican / Tico | San Pedro de Montes de Oca | 1972 | 7 | http://antojitos.co.cr/ | Domain cited in directories; did not load. 1972 institution with a sustainability story and no digital home. |

### No owned website

| Restaurant | Cuisine | Area | Founded / notes | Score | URL | Findings |
| --- | --- | --- | --- | ---: | --- | --- |
| Lubnan | Lebanese | Paseo Colón, opposite Torre Mercedes | San José classic | 8 | https://www.facebook.com/lubnancr | No own site. Reservations by phone/WhatsApp. Lonely Planet and Fodor’s feature it; Google and Facebook are the only vitrine. |
| Café Mundo | International | Barrio Otoya, San José | House from 1910 | 7 | https://www.facebook.com/cafemundocr | Century-old house, locals and expats. Menu and hours live on Facebook and Instagram. |
| Nuestra Tierra | Typical | Plaza de la Democracia, San José | Downtown tourist stop | 7 | https://www.facebook.com/nuestratierracr/ | High tourist flow in front of museums. No own domain; bookings and photos only on social. |

## Recurring patterns

**In the code of live sites:** archaeology, not random ugliness. One `.htm` file per menu category, tables for layout, cropped images as buttons, frozen copyrights (2012, 2018), generic booking widgets. Enjoy still has OpenTable deep-links dated `2021-03-26`.

**Who disappears from Google:** Lubnan, Café Mundo, and Nuestra Tierra never contest the SERP — Facebook eats clicks from tourists searching “official website”. Machu Picchu, Lukas, Chubascos, and Soda Tapia own a domain, but DNS/hosting no longer serves it. That is worse than an old site: the brand name points to an error.

**Who already rebuilt:** La Divina Comida (Escazú, since 2003), Il Piaceri (Cartago, 2010), Ronny’s Place (Manuel Antonio, WordPress 2024), Mirador Tiquicia (Escazú, © 2022), Grano de Oro (hotel + restaurant). The gap is traditional GAM brands and coastal B&Bs that never left Internet Explorer-era HTML.

## Score legend

| Score | Meaning |
| ---: | --- |
| 10 | 1990s/2000s HTML or broken multimedia |
| 8–9 | Static 2010s site, or a chain running an image collage |
| 6–7 | Live CMS, dated information architecture |
| Down | Timeout / 500 / 503 |
| No site | Social networks only |

## Limits

This audit did not measure traffic, real reservations, or whether every branch is still open. The embedded browser did not load; diagnosis is from public HTML and domain resolution. Verify on a phone and on-site before a sales approach.

## Sources

Public HTML of each domain, HTTP status codes, and directories: restaurantesencr.com, Yelu, OpenTable, Frommer’s. Reviewed 24 Aug 2026.
