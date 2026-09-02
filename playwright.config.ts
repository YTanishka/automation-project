import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report", open: "never" }]
  ],

  use: {
    baseURL: "https://automationexercise.com",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry"
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"]
      }
    }
  ]
});