import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';
import { transformSync } from 'esbuild';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(dirname, '..');
const srcRoot = path.resolve(projectRoot, 'src');

// The project mirrors Gatsby's convention of putting JSX in `.js` files
// (e.g. src/design-system/icon.js, src/use-color-mode.js). Vite 8 / oxc
// only treats `.jsx` as JSX, so we transpile `.js` files under src/ first.
const jsxInJsPlugin = {
  name: 'jsx-in-js',
  enforce: 'pre',
  transform(code, id) {
    const cleanId = id.split('?')[0];
    if (!cleanId.endsWith('.js')) return null;
    if (!cleanId.startsWith(srcRoot)) return null;
    if (cleanId.includes(path.sep + 'node_modules' + path.sep)) return null;
    const result = transformSync(code, {
      loader: 'jsx',
      jsx: 'automatic',
      sourcefile: id,
      sourcemap: true,
    });
    return { code: result.code, map: result.map };
  },
};

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-mcp',
  ],
  framework: '@storybook/react-vite',
  async viteFinal(viteConfig) {
    return mergeConfig(viteConfig, {
      plugins: [jsxInJsPlugin],
      resolve: {
        alias: {
          '@ds': path.resolve(dirname, '../src/design-system'),
          '@components': path.resolve(dirname, '../src/components'),
          '@theme': path.resolve(dirname, '../src/theme'),
          '@utils': path.resolve(dirname, '../src/utils'),
          '@assets': path.resolve(dirname, '../content/assets'),
          gatsby: path.resolve(dirname, './gatsby-stub.jsx'),
        },
      },
      optimizeDeps: {
        rolldownOptions: {
          moduleTypes: { '.js': 'jsx' },
        },
      },
    });
  },
};

export default config;