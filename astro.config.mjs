// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias:
        process.env.NODE_ENV === "production"
          ? {
              "react-dom/server": "react-dom/server.edge",
            }
          : undefined,
    },
  },

  integrations: [react()],
  adapter: cloudflare({
    imageService: "cloudflare",
  }),
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
      RESEND_FROM_EMAIL: envField.string({
        context: "server",
        access: "public",
      }),
      RESEND_TO_EMAIL: envField.string({ context: "server", access: "public" }),
    },
  },
});
