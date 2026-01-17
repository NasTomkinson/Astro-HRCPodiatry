// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  server: {
    host: true,
    port: 4321
  },
  env: {
    schema: {
      STRAPI_URL: envField.string({ context: "client", access: "public", optional: false, default: "http://localhost:1337"}),
      STRAPI_MEDIA_URL: envField.string({context: "client", access: "public", optional: false, default: "http://localhost:1337/uploads"}),
      STRAPI_TOKEN: envField.string({ context: "server", access: "secret", optional: false})
    }
  },
  image: {   },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      include: {
        mdi: ["*"],
      },
    }),
  ],
});
