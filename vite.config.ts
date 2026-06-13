import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite gives us instant HMR + React Fast Refresh in `bun run dev`.
// On GitHub Pages the site is served from the `/landing-page/` project subpath,
// so the production build needs that base; the dev server stays at root.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/landing-page/" : "/",
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 4173,
  },
}));
