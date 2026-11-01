# varun.ca (Gatsby, retired)

This is the **previous version** of [varun.ca](https://varun.ca): the Gatsby site that served it until November 2026. The live site has since been rebuilt from scratch and is served from a separate repo. This repo is archived and no longer deployed.

## Why it's still here

Some posts link to code in this repo, such as the visualizations behind [Noise in Creative Coding](https://varun.ca/writing/noise/), the dark mode hooks in [Dark Mode](https://varun.ca/writing/dark-mode/), the scroller in [Scrollytelling with React](https://varun.ca/writing/scrollytelling/) and the original demos for [How to build stunning 3D scenes with React Three Fiber](https://varun.ca/writing/modular-webgl/) and [How we built the Storybook Day 3D animation](https://varun.ca/writing/storybook-day/). Those links point at `master`, so it stays readable.

The posts themselves now live at `https://varun.ca/writing/<slug>/`. The old flat URLs (`https://varun.ca/<slug>/`) redirect there. For questions or comments about a post, reply on [Bluesky](https://bsky.app/profile/varun.ca).

## Running it locally

It's a Gatsby 2 site from 2019–2021, so it needs an older Node toolchain and the OpenSSL legacy provider:

```sh
npm install
npm start   # NODE_OPTIONS=--openssl-legacy-provider gatsby develop
```

Posts are MDX under `content/posts/<slug>/`, with their interactive visualizations alongside.
