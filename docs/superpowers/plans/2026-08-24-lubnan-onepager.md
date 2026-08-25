# Lubnan one-pager — plan de implementación

> Ejecutar en esta sesión. Spec: `docs/superpowers/specs/2026-08-24-lubnan-onepager-design.md`

**Goal:** One-pager `noindex` en español, marca `#b80a0a`, WhatsApp 8660 0707, carta en Oddmenu sin precios.

**Architecture:** Next.js App Router. Copy en `lib/content.ts`. Página = Header + Hero + MenuTeaser + Visit + Footer + WhatsAppBar. Sin JSON-LD, sin CMS.

**Tech stack:** Next.js, TypeScript, Tailwind, `next/font` Rubik, `next/image` con CloudFront Oddmenu.

## Archivos

- `app/layout.tsx` — `lang="es"`, Rubik, robots noindex
- `app/page.tsx` — arma secciones
- `app/globals.css` — tokens (rojo, papel)
- `lib/content.ts` — todo el copy y URLs
- `components/ProposalBanner.tsx`
- `components/Header.tsx`
- `components/Hero.tsx`
- `components/MenuTeaser.tsx`
- `components/Visit.tsx`
- `components/Footer.tsx`
- `components/WhatsAppBar.tsx`
- `next.config.ts` — remotePatterns CloudFront

## Tareas

1. Scaffold Next.js + Tailwind en la raíz del repo (convive con `docs/`).
2. `lib/content.ts` con teléfonos, horario, 4 platos sin precio, links.
3. Componentes y página. Banner “Propuesta de WWebs”. Sticky WhatsApp. Padding inferior en móvil.
4. Verificar: `noindex`, `wa.me/50686600707`, `tel:+50622576071`, grep sin `₡`, carta → Oddmenu, móvil y desktop en el navegador.

No commitear salvo que lo pidan.
