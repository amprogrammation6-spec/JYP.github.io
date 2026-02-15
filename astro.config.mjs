// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://amprogrammation6-spec.github.io',
  base: '/JYP',
  vite: {
    plugins: [tailwindcss()]
  }
});