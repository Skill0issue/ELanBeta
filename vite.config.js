import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import VitePages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), VitePages()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase the warning limit to 1 MB
  },
});
