import { test, expect } from "@playwright/test";

import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { ProductPage } from "../../pages/ProductPage";
import { CartPage } from "../../pages/CartPage";

import userData from "../../test-data/user.json";

test("@e2e Search To Cart", async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  //open website
  await page.goto("https://www.automationexercise.com/");

  //click signup / login
  await homePage.signupLoginLink.click();

  //Logged in
  await loginPage.login(userData.validUser.email, userData.validUser.password);

  //verify user
  await expect(page.getByText(/Logged in as/i)).toBeVisible();

  //open products
  await homePage.productLink.click();

  //verify products page
  await expect(productPage.allProductsText).toBeVisible();

  //add blue top to cart
  await productPage.addProductToCart(userData.product.name);

  // go to cart
  await homePage.cartLink.click();

  // verify cart
  await expect(cartPage.cartTable).toBeVisible();

  // verify blue top is in cart
  await expect(page.getByText(userData.product.name)).toBeVisible();
});
