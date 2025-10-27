import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// ✅ Penn LPS Best Practice: Clear, semantic, and deployment-ready configuration
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
  build: {
    sourcemap: false, // Production build optimization
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: undefined, // Prevents code-splitting issues
      },
    },
  },
  server: {
    open: true,
    port: 5173, // Recommended local dev port
    strictPort: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
});
