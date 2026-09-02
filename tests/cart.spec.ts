import { test, expect } from "@playwright/test";
import { CartPage } from "../pages/CartPage";

test("Verify Cart", async ({ page }) => {
  await page.goto("https://automationexercise.com");

  const cartPage = new CartPage(page);

// add product to cart
  await page.getByText("Add to cart").first().click();

  //veiw cart
  await page.getByText("View Cart").click();

  //verify product in cart 
  await expect(cartPage.cartTable).toBeVisible();
});
