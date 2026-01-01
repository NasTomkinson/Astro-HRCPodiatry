// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  env: {
    schema: {
      STRAPI_URL: envField.string({ context: "client", access: "public", optional: false, default: "http://localhost:1337"}),
      STRAPI_TOKEN: envField.string({ context: "client", access: "public", optional: false}),
      STRAPI_MEDIA_URL: envField.string({context: "client", access: "public", optional: false, default: "http://localhost:1337/uploads"})
    }
  },
  image: {
    remotePatterns: [{protocol: 'https://pixabay.com/'}]
  },
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
