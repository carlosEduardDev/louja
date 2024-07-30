/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifest = {
  registerType: "prompt",
  manifest: {
    name: "Louja",
    short_name: "Louja",
    description: "sistema de ecommerce com API do Mercado Livre",
    icons: [
      {
        src: "./public/icons-pwa/icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "./public/icons-pwa/icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "./public/icons-pwa/icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "./public/icons-pwa/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#ffffff",
    background_color: "#2563eb",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(manifest)],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
