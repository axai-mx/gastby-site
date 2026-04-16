import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://axai.com.mx',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
  },
  vite: {
    resolve: {
      alias: {
        '~': new URL('./src', import.meta.url).pathname,
      },
    },
  },
});
