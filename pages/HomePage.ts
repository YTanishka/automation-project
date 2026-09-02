import { Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly productLink: Locator;
  readonly signupLoginLink: Locator;
  readonly cartLink: Locator;
  readonly contactUs: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productLink = page.getByRole("link", { name: "Products" });
    this.signupLoginLink = page.getByRole("link", { name: "Signup / Login" });
    this.cartLink = page.getByRole("link", { name: "Cart" });
    this.contactUs = page.getByRole("link", { name: "Contact us" });
  }

  async clickProducts() {
    await Promise.all([
      this.page.waitForURL("**/products"),
      this.productLink.click()
    ])
  }

  async clickProductsWithoutWait() {
    await this.productLink.click();
  }

  async clicksignupLogin() {
    await this.signupLoginLink.click();
  }
  async clickcartLink() {
    await this.cartLink.click();
  }
  async clickcontactUs() {
    await this.contactUs.click();
  }
}
