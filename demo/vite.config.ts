import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import remarkMdxCodeMeta from 'remark-mdx-code-meta';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
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
