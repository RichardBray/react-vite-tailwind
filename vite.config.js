import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      $components: path.resolve(__dirname, './src/components'),
      $containers: path.resolve(__dirname, './src/containers'),
    },
  },
  plugins: [react()],
  server: {
    port: 5000,
  },
});
