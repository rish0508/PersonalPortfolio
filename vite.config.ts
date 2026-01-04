import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(({ mode }) => {
  // IMPORTANT:
  // If your GitHub Pages URL is https://rish0508.github.io/ (user site), base should be "/"
  // If your GitHub Pages URL is https://rish0508.github.io/PersonalPortfolio/ (project site), base should be "/PersonalPortfolio/"
  const base =
    mode === "production" && process.env.GH_PAGES_REPO
      ? `/${process.env.GH_PAGES_REPO}/`
      : "/";

  return {
    plugins: [react(), runtimeErrorOverlay()],

    root: path.resolve(__dirname, "client"),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },

    base,

    build: {
      outDir: path.resolve(__dirname, "dist"),
      emptyOutDir: true,
    },
  };
});
