import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  assetsInclude: ['**/*.jpeg', '**/*.png', '**/*.jpg', '**/*.svg'],
  output: "server",
  adapter: vercel()
});