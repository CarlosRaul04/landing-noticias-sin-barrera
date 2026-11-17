# Noticias sin barreras · Landing page

Página de presentación del plugin **Noticias sin barreras** (accesibilidad cognitiva para diarios digitales).
Hecha con **Vite + React + TypeScript + Tailwind CSS 4**.

## Cómo correrla

```bash
npm install
npm run dev      # abre http://localhost:5173
npm run build    # genera la carpeta dist para publicar
```

## Estructura

```
src/
├── config.ts                 Enlaces: DEMO_URL (prototipo en Vercel) y REPO_URL (GitHub)
├── data/content.ts           Todos los textos de la página
├── index.css                 Tailwind + colores y tipografía del plugin (@theme)
├── App.tsx                   Orden de las secciones
└── components/
    ├── layout/               Navbar, Footer, Logo, SkipLink
    ├── sections/             Hero, Audience, Features, HowItWorks, HelpCenter, Principles, CallToAction
    └── ui/                   Button, Container, SectionHeading, PhoneFrame, Icon
public/img/                   Capturas del plugin y Notín (WebP)
```

- **Cambiar un texto:** `src/data/content.ts`.
- **Cambiar el enlace del demo:** `src/config.ts`.
- **Cambiar colores o la fuente:** bloque `@theme` en `src/index.css`.
- **Agregar una sección:** crea el componente en `components/sections/` y ponlo en `App.tsx`.

## Accesibilidad

Enlace «Saltar al contenido», foco visible, pestañas de herramientas manejables con flechas,
textos alternativos en las capturas y animaciones desactivadas si el sistema pide reducir movimiento.

## Publicar en Vercel

Importa el repositorio en Vercel: detecta Vite solo (`npm run build`, carpeta `dist`).
