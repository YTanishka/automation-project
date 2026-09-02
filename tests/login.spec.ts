import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import userData from "../test-data/user.json";

test("Login User", async ({ page }) => {
  await page.goto("https://automationexercise.com");

  await page.getByText("Signup / Login").click();

  const loginPage = new LoginPage(page);

  await loginPage.login(userData.validUser.email, userData.validUser.password);

  await loginPage.verifyLoginSuccessful();
});
