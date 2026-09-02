import { Page, Locator } from "@playwright/test";

export class PaymentPage {
  readonly page: Page;

  readonly nameOnCard: Locator;
  readonly carddNumber: Locator;
  readonly cvc: Locator;
  readonly expiryMonth: Locator;
  readonly expiryYear: Locator;
  readonly payButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.nameOnCard = page.locator("input[data-qa='name-on-card']");
    this.carddNumber = page.locator("input[data-qa='card-number']");
    this.cvc = page.locator("input[data-qa='cvc']");
    this.expiryMonth = page.locator("input[data-qa='expiry-month']");
    this.expiryYear = page.locator("input[data-qa='expiry-year']");

    this.payButton = page.getByRole("button", {
      name: "Pay and Confirm Order",
    });
  }
  async enterPayementDetails(
    name: string,
    cardNumber: string,
    cvc: string,
    expiryMonth: string,
    expiryYear: string,
  ) {
    await this.nameOnCard.fill(name);
    await this.carddNumber.fill(cardNumber);
    await this.cvc.fill(cvc);
    await this.expiryMonth.fill(expiryMonth);
    await this.expiryYear.fill(expiryYear);
  }

  async payAndConfirmOrder() {
    await this.payButton.click();
  }
}
