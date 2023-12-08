import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import VitePages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Skill0issue.github.io/',
  plugins: [react(), tailwindcss(), VitePages()],
});
