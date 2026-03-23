import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  root: path.resolve(__dirname, "./app"),
  base: "/Portfolio/",
  publicDir: path.resolve(__dirname, "./public"),
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: path.resolve(__dirname, "./dist"),
    emptyOutDir: true,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
