import { test, expect } from "@playwright/test";
import { SignupPage } from "../pages/SignupPage";
import userData from "../test-data/user.json";

test("Signup User", async ({ page }) => {
  await page.goto("https://automationexercise.com");

  await page.getByText("Signup / Login", { exact: true }).click();

  await expect(page).toHaveURL(/\/login/);

  const signupPage = new SignupPage(page);

  const uniqueEmail = `tanishka${Date.now()}@gmail.com`;
  await signupPage.signup(userData.newUser.name, uniqueEmail);
});
