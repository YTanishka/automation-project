import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  timeout: 60000,

  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report", open: "never" }],
  ],

  use: {
    baseURL: "https://automationexercise.com",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",

    headless: true,
    viewport: null,

    launchOptions: {
      args: ["--start-maximized"],
    },
  },

  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
      },
    },
    // {
    //   name: "firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //   },
    // },
    // {
    //   name: "webkit",
    //   use: {
    //     ...devices["Desktop Safari"],
    //   },
    // },
  ],
});
