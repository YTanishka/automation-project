import { test, expect } from "@playwright/test";

import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { ProductPage } from "../../pages/ProductPage";


import userData from "../../test-data/user.json";

test("@e2e Category To Cart", async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  

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

  // click women
  await productPage.clickWomen();

  // click dress
  await productPage.clickMen();

  // add product to cart
  await productPage.addProductToCart();

  // open cart
  await homePage.cartLink.click();
});
