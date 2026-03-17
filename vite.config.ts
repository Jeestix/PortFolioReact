import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: 'https://jeestix.github.io/PortFolioReact/',
  plugins: [react()],
});
