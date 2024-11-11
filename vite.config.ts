import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// vite.config.js / vite.config.ts
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "200.html", // specify your source 200.html file
          dest: ".", // copy it to the root of the dist folder
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
