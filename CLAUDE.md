# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — dev server on `http://localhost:8000` (sets `NODE_OPTIONS=--openssl-legacy-provider`, required by Gatsby v2 on modern Node).
- `npm run develop` — raw `gatsby develop` (will fail on modern Node without the legacy provider flag; use `npm start` instead).
- `npm run build` — production build with `GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES=true` and `--log-pages`.
- `npm run serve` — serve the built site.
- `npm run format` — Prettier across `**/*.{js,jsx,json,md}`.
- No test runner is configured (`npm test` is a placeholder echo).

GraphiQL during dev: `http://localhost:8000/___graphql`.

## Architecture

Personal site for Varun Vachhar (varun.ca). Gatsby v2 + MDX + styled-components/styled-system, deployed on Netlify.

### Data sources → GraphQL

Three `gatsby-source-filesystem` entries feed three kinds of data (see `gatsby-config.js`):

1. `content/posts/**/*.mdx` — blog posts. Co-located assets live in `content/assets/`.
2. `data/*.json` — `experiments.json`, `projects.json`, `sketches.json`, `speaking.json`, `works.json`. `gatsby-transformer-json` exposes each as `all<Name>Json` queries (e.g. `allSketchesJson`).
3. `content/assets/` — images and static assets, processed via `gatsby-plugin-sharp` / `gatsby-transformer-sharp` and `gatsby-remark-images` (max width 1152, traced SVG).

### Page generation (`gatsby-node.js`)

- `onCreateNode` adds a `slug` field to every `Mdx` node from its file path.
- `createPages` queries all MDX sorted by date ASC, then for each post computes a `relatedPosts` list of up to 3 entries from indices `[i-3, i-2, i-1, i+1, i+2, i+3]` and passes them in `pageContext`. Every post is rendered through `src/layouts/post-layout.js`.
- `onCreateWebpackConfig` registers the path aliases below and adds `src/` as a module root.

### Path aliases

Defined in both `gatsby-node.js` (webpack) and `jsconfig.json` (editor):

- `@ds` → `src/design-system`
- `@layouts` → `src/layouts`
- `@components` → `src/components`
- `@theme` → `src/theme`
- `@utils` → `src/utils`
- `@assets` → `content/assets`

Note: `@theme` is in webpack but missing from `jsconfig.json`.

### Design system & theming

`src/design-system/` is a hand-rolled component library built on `styled-components` + `styled-system`. `src/design-system/index.js` re-exports all primitives (`Box`, `Flex`, `Text`, `H1`–`H6`, `Link`, `List`, `Image`, `Stack`, buttons, icons, etc.). Always import from `@ds`, not from individual files.

`src/theme/theme.js` defines the styled-system theme (breakpoints, space scale 0–8, fontSizes, fontWeights, measures, fonts, animations). Colors come from `src/theme/color-mode-styles.js` + `src/theme/colors.js` and support **light/dark color modes**:

- `src/use-color-mode.js` provides `useColorMode()`, `ColorModeContext`, and `InitializeColorMode` (an inline script preventing FOUC by reading `localStorage['varun-ca-color-mode']` before hydration).
- `src/layouts/layout.js` wraps the tree in `ThemeProvider` with `{ ...theme, ...createColorStyles(mode) }` and an `MDXProvider`.
- `modeCustomProperties` injects CSS custom properties keyed by mode for use across the site.

When adding theme-aware colors, extend `colors.js` and `color-mode-styles.js` together, not the components.

### MDX integration

`src/layouts/ds-to-mdx.js` is the `MDXProvider` mapping. It overrides default HTML elements (`h1`–`h6`, `p`, `a`, `ul`, `blockquote`, `figure`, …) with design-system components, and exposes shortcodes you can use directly inside `.mdx` files **without imports**: `Flex`, `Box`, `Text`, `Image`, `CallOut`, `DemoSource`, `CodePen`, `Embed`, `AsciiDiagram`, `AsciiDiagramContainer`, `SrOnly`, `Video`, `SourceCard`. Add new shortcodes here, not in individual posts.

MDX frontmatter fields used by `post-layout.js`: `title`, `date`, `image` (resolved to `publicURL`), `maxWidth` (overrides default `Box maxWidth={7}`).

Remark plugin chain (configured in `gatsby-config.js`): `gatsby-remark-code-titles`, `gatsby-remark-images`, `gatsby-remark-autolink-headers` (custom anchor SVG, class `heading-anchor`), `gatsby-remark-smartypants`, `gatsby-remark-prismjs` (themed via `src/theme/prism-styles.js`), `gatsby-remark-copy-linked-files`.

### Pages

`src/pages/` holds the top-level routes:

- `index.js` — about page; queries featured writing/speaking/works/sketches.
- `writing.js`, `sketches.js`, `speaking.js`, `404.js` — listing pages.
- `pages/projects/` — standalone interactive/creative-coding pages (e.g. `homesick.js`, `tethered-motion.js`, `consolefont.js`). These bypass the MDX pipeline.

### Creative-coding stack

The dependency surface includes `three`, `@react-three/fiber`, `canvas-sketch`, `canvas-sketch-util`, `eases`, `three.meshline`, and a suite of `glsl-*` modules. `babel-plugin-glsl` (devDependency) lets you `import` `.glsl` files directly. Many post directories under `content/posts/` (e.g. `ray-march-sdf/`, `metaballs/`, `noise/`, `three-js-particles/`) ship their own demo components consumed by their MDX.

### Other integrations

- Newsletter is **Buttondown** (`src/components/newsletter.js`); the previous provider was migrated out in commit `2b602fd`.
- Analytics: both `gatsby-plugin-google-analytics` (`GOOGLE_ANALYTICS_TRACKING_ID`) and `gatsby-plugin-google-gtag` (`GA_TRACKING_ID`) are configured — env vars in `.env`.
- RSS via `gatsby-plugin-feed` using `gatsby-plugin-mdx/feed`.
- Canonical URL plugin pins to `https://varun.ca`.
- `gatsby-plugin-netlify` handles deploy headers/redirects; deploy config in `netlify.toml`.

## Conventions

- Prettier: single quotes, semis, `tabWidth: 2`, `trailingComma: 'es5'`, LF.
- Prefer aliased imports (`@ds`, `@components`, …) over relative paths that cross top-level dirs.
- Adding a new section to the homepage means: (1) add JSON to `data/`, (2) build a `*-featured.js` component in `src/components/`, (3) wire its GraphQL fragment into the `AboutPage` query in `src/pages/index.js`.
- Adding a new MDX shortcode: register it in `src/layouts/ds-to-mdx.js` so it's available in every post.
