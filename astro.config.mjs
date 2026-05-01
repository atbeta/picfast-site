import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://picfast.top',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
