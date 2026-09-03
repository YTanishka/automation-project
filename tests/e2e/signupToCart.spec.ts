import { test, expect } from "@playwright/test";

import { HomePage } from "../../pages/HomePage";
import { SignupPage } from "../../pages/SignupPage";
import { LoginPage } from "../../pages/LoginPage";
import { AccountCreationPage } from "../../pages/AccountCreation";
import { ProductPage } from "../../pages/ProductPage";
import { CartPage } from "../../pages/CartPage";

import userData from "../../test-data/user.json";

test("@e2e  Signup to Cart", async ({ page }) => {
  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);
  const loginPage = new LoginPage(page);
  const accountCreation = new AccountCreationPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  //open website
  await page.goto("https://www.automationexercise.com/");

  //click signup / login
  await homePage.signupLoginLink.click();

  const uniqueEmail = `tanishka${Date.now()}@gmail.com`;

  // enter new user detail
  await signupPage.signup(userData.newUser.name, uniqueEmail);

  await expect(accountCreation.title).toBeVisible();

  // create new user account
  await accountCreation.CreateAccount(
    userData.newUser.password,
    userData.newUser.day,
    userData.newUser.month,
    userData.newUser.year,
    userData.newUser.firstName,
    userData.newUser.lastName,
    userData.newUser.company,
    userData.newUser.address,
    userData.newUser.address2,
    userData.newUser.country,
    userData.newUser.state,
    userData.newUser.city,
    userData.newUser.zipcode,
    userData.newUser.mobileNumber
  )

  //verify account is created
  await expect(page.getByText("Account Created!")).toBeVisible()

  // click continue
  await page.getByText("Continue").click()

  // go to products
  await homePage.productLink.click();

  //verify products page
  await expect(productPage.allProductsText).toBeVisible();

   // 9. Add first product to cart
    await productPage.addProductToCart();

    // 10. Go to Cart
    await homePage.cartLink.click();

    // 11. Verify cart
    await expect(page).toHaveURL(/view_cart/);
});
