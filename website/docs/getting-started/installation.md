---
id: 'installation'
title: Installation
---

## CLI

You can use cli using one of the two templates(js, ts) created with Vite.

```bash
npx create-presentify
```

### Usage

All you have to do is start editing the mdx file

## Existing project installation

Presentify can also be added to an existing project, but this requires react v18.

```bash
npm install presentify @emotion/styled @emotion/react remark-mdx-code-meta
```

### Configuration

#### Vite

You need to install 2 additional packages

```bash
npm install @vitejs/plugin-react @mdx-js/rollup
```

And edit `vite.config.js` or `vite.config.ts` like that:

```js
import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import remarkMdxCodeMeta from 'remark-mdx-code-meta';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({ jsxImportSource: '@emotion/react' }),
    mdx({
      jsxImportSource: '@emotion/react',
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [remarkMdxCodeMeta],
    }),
  ],
});
```

#### Webpack

You need to install additional packages

```bash
npm install @mdx-js/loader
```

And edit Webpack config like that:

```js
module.exports = {
  module: {
    // …
    rules: [
      // …
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: '@mdx-js/loader',
            /** @type {import('@mdx-js/loader').Options} */
            options: {
              jsxImportSource: '@emotion/react',
              providerImportSource: '@mdx-js/react',
              remarkPlugins: [remarkMdxCodeMeta],
            },
          },
        ],
      },
    ],
  },
};
```

If your vite or webpack config is edited you can now create `.mdx` file and import it in your project. When importing you must pass components as a prop.

```js
import { components } from 'presentify';

import MyPresentation from './MyPresentation.mdx';

export const Presentation = () => <MyPresentation components={components} />;
```

In `.mdx` file you need to import `PresentifyProvider`

```mdx
import { PresentifyProvider } from 'presentify';

<PresentifyProvider>...</PresentifyProvider>
```

### Usage

All you have to do is start editing the mdx file
