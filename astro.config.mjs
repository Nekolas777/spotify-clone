import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  assetsInclude: ['**/*.jpeg', '**/*.png', '**/*.jpg', '**/*.svg'],
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
  devToolbar: {
    enabled: false
  }
});