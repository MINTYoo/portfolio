import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  assetsInclude: [
    "**/*.PNG",
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.JPG",
    "**/*.JPEG",
    "**/*.gif",
    "**/*.svg",
  ],
});
