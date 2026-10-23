# James (Jack) Jensen's website

Source for [www.jackjensen.dev](https://www.jackjensen.dev), built with Vue 3,
Vuetify, TypeScript, and Vite. Source and deployment configuration live together
in this repository. Generated files in `dist/` are ignored.

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

In repository **Settings → Pages → Build and deployment**, select **GitHub Actions**.
Keep the custom domain set to `www.jackjensen.dev` and preserve the existing DNS
configuration. A `CNAME` file alone does not configure the repository's domain.

The Pages workflow validates and builds changes pushed to `master`, then deploys
`dist/` using the built-in `GITHUB_TOKEN`. It can also be started manually from the
Actions tab. Manual deployments are restricted to `master`.

The workflow runs only while the repository is public and uses standard Ubuntu
runners, whose execution is free for public repositories. Dependency caching is
disabled and the Pages artifact is retained for one day. No generated files need
to be committed, and no separate deployment repository is needed.

## Consolidation

This project was copied from `jamescjensen/website-source` into the existing
`jamescjensen/jamescjensen.github.io` repository. The original source repository
remains available with its history; that history has not been merged here.
After the first successful Pages deployment, the old repository can be archived
and its description updated to point here.
