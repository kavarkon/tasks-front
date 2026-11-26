import { playwright } from "@vitest/browser-playwright"
import { defineConfig } from "vite"

export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      "/api/": {
        target: "https://todo.puorp.ru",
        changeOrigin: true,
      },
    },
  },
  test: {
    browser: {
      enabled: true,
      headless: true,
      instances: [
        {
          browser: "chromium",
        },
      ],
      provider: playwright({
        launchOptions: {
          executablePath: process.env.CHROMIUM_PATH,
        },
      }),
    },
  },
})
