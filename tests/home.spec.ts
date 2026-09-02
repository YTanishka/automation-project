import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("Verify Home Page", async ({ page }) => {
  const homePage = new HomePage(page);

  await page.goto("https://automationexercise.com");

  await expect(page).toHaveTitle(/Automation Exercise/);

  await expect(homePage.productLink).toBeVisible();
  await expect(homePage.signupLoginLink).toBeVisible();
  await expect(homePage.cartLink).toBeVisible();
  await expect(homePage.contactUs).toBeVisible();
});
