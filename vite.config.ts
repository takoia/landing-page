import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite gives us instant HMR + React Fast Refresh in `bun run dev`.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 4173,
  },
});
