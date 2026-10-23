# James (Jack) Jensen's website

Source for [www.jackjensen.dev](https://www.jackjensen.dev), built with Vue 3,
Vuetify, TypeScript, and Vite. Source and deployment configuration live together
in this repository.

## Local development

Use Node.js 24 and npm:

```sh
npm ci
npm run dev
```

## Validation and preview

```sh
npm run lint
npm run build
npm run preview
```

The build includes TypeScript checking and writes the static site to `dist/`.
Files in `public/`, including the resume, icons, and `CNAME`, are copied into
the build. Vite's default `/` base supports both the user site and custom domain.

## GitHub Pages

The Pages workflow validates and builds changes pushed to `master`, then deploys
`dist/` using the built-in `GITHUB_TOKEN`. It can also be started manually from the
Actions tab. Manual deployments are restricted to `master`.
