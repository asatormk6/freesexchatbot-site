import { defineConfig } from 'astro/config';
import staticAdapter from '@astrojs/adapter-static';

export default defineConfig({
    output: 'static',
    adapter: staticAdapter(),
    build: {
        outDir: 'docs', // build directly to /docs so GitHub Pages can serve it
    },
    base: '/freesexchatbot-site/', // IMPORTANT: match your repo name for GitHub Pages routing
});