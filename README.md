# varun.ca (Gatsby, retired)

This is the **previous version** of [varun.ca](https://varun.ca): the Gatsby site that served it until November 2026. The live site has since been rebuilt from scratch and is served from a separate repo. This repo is no longer deployed.

## Why it's still here

- **Reader feedback.** The "Open an Issue" link at the end of every post on [varun.ca/writing](https://varun.ca/writing/) opens an issue in this repo. Feedback, corrections and questions about a post are welcome here.
- **Source links.** Some posts link to code in this repo, such as the visualizations behind [Noise in Creative Coding](https://varun.ca/writing/noise/), the dark mode hooks in [Dark Mode](https://varun.ca/writing/dark-mode/) and the scroller in [Scrollytelling with React](https://varun.ca/writing/scrollytelling/). Those links point at `master`, so it stays put.

The posts themselves now live at `https://varun.ca/writing/<slug>/`. The old flat URLs (`https://varun.ca/<slug>/`) redirect there.

## Running it locally

It's a Gatsby 2 site from 2019–2021, so it needs an older Node toolchain and the OpenSSL legacy provider:

```sh
npm install
npm start   # NODE_OPTIONS=--openssl-legacy-provider gatsby develop
```

Posts are MDX under `content/posts/<slug>/`, with their interactive visualizations alongside.
