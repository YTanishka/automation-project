import { Page, Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;

  readonly cartTable: Locator;
  readonly proceedToCheckout: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartTable = page.locator("#cart_info");

    this.proceedToCheckout = page.getByText("Proceed To Checkout");
  }
}
