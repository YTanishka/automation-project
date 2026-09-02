import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { ProductPage } from "../../pages/ProductPage";

test("@smoke Product Page", async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);

  await page.goto("/");

  await homePage.clickProducts();

  await expect(productPage.allProductsText).toBeVisible();

  await productPage.addProductToCart("Blue Top");
});
