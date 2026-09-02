import { test, expect } from "@playwright/test";
import { ProductPage } from "../pages/ProductPage";
import { HomePage } from "../pages/HomePage";

test("Verify Product Page", async ({ page }) => {
  await page.goto("https://automationexercise.com");

  const homePage = new HomePage(page)

  const productPage = new ProductPage(page);

  await homePage.clickProducts();

  console.log("URL:", page.url());

  // Verify Product page
  await expect(productPage.allProductsText).toBeVisible();

  // verify product names
  await expect(productPage.productName.first()).toBeVisible();

  //verify prices
  await expect(productPage.price.first()).toBeVisible();

  //verify image
  await expect(productPage.Image.first()).toBeVisible();

  //add product to cart
  await productPage.addProductToCart();
});
