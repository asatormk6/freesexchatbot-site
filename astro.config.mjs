import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  base: '/freesexchatbot-site/', // <-- this must match your GitHub repo name
  build: {
    outDir: 'docs',
  },
});