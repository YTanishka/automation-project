import { test, expect } from "@playwright/test";

import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { ProductPage } from "../../pages/ProductPage";

import userData from "../../test-data/user.json";
import { CartPage } from "../../pages/CartPage";
import { PaymentPage } from "../../pages/PaymentPage";
import paymentData from "../../test-data/payment.json";

test("@e2e  Login To Product Page", async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const paymentPage = new PaymentPage(page);

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

  //await productPage.continueShopping.click();

  // go to cart
  await homePage.cartLink.click();

  // verify cart
  await expect(cartPage.cartTable).toBeVisible();

  // verify blue top is in cart
  await expect(page.getByText(userData.product.name)).toBeVisible();

  // Proceed to checkout
  await cartPage.proceedToCheckout.click();

  // verify checkout page
  await expect(page.getByText("Address Details")).toBeVisible();

  // verify review order
  await expect(page.getByText("Review Your Order")).toBeVisible();

  // verify product in order
  await expect(page.getByText(userData.product.name)).toBeVisible();

  //enter order message
  await page
    .locator("textarea[name='message']")
    .fill("Please deliver my order.");

  //place order
  await page.getByRole("link", { name: "Place Order" }).click();

  // wait for payment page
  await page.waitForURL("**/payment");

  await expect(page.locator("input[data-qa='name-on-card']")).toBeVisible();

  //fill payment details
  await paymentPage.enterPayementDetails(
    paymentData.name,
    paymentData.cardNumber,
    paymentData.cvc,
    paymentData.expiryMonth,
    paymentData.expiryYear,
  );

  // pay and confirm order
  await paymentPage.payAndConfirmOrder();

  //verify order success
  await expect(page.getByText("Order Placed!")).toBeVisible();
});
