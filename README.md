# Project Documentation - R-T Portfolio Website

## Overview:

### Project Name: R-T Portfolio Website

# Project structure

```
my-app/
├── AGENTS.md
├── CLAUDE.md
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.mjs
├── README.md
├── tsconfig.json
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.js
│   ├── lib/
│   │   ├── definitions.ts
│   │   └── placeholder-data.ts
│   └── ui/
│       ├── fonts.ts
│       ├── globals.css
│       ├── about/
│       ├── contact/
│       ├── experience/
│       ├── footer/
│       ├── header/
│       ├── hero/
│       ├── icons/
│       ├── projects/
│       ├── resume/
│       ├── section-header/
│       └── skills/
├── components/
│   └── ui/
└── public/
```

## Structure Schema

- `app/`: Next.js application routes and root layout.
- `app/api/`: Route handlers for server-side endpoints.
- `app/lib/`: Shared data definitions and placeholder content.
- `app/ui/`: Portfolio sections and their feature-specific components and styles.
- `components/ui/`: Reusable interface primitives shared across the application.
- `public/`: Static assets served directly by Next.js.
- Root configuration files: Package management, framework, TypeScript, CSS processing, and linting settings.
