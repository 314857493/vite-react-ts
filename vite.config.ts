import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "t.jdcloud.com",
    port: 4000,
    proxy: {
      "/api": {
        target: "http://localhost:9000",
        changeOrigin: true,
        // rewrite: { "^/api": "" },
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#4762fe",
        },
      },
    },
  },
});
