import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5173,
    open: true,
    https: false, // Set to true if you have SSL certs
  },
  build: {
    outDir: 'dist',
  },
});
