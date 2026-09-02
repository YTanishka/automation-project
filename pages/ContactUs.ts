import { Page, Locator } from "@playwright/test";

export class ContactUsPage {
  readonly page: Page;

  readonly name: Locator;
  readonly email: Locator;
  readonly subject: Locator;
  readonly message: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.name = page.locator('[data-qa="name"]');
    this.email = page.locator('[data-qa="email"]');
    this.subject = page.locator('[data-qa="subject"]');
    this.message = page.locator('[data-qa="message"]');
    this.submitButton = page.locator('[data-qa="submit-button"]');
  }

  async submitContactUsPage(
    name: string,
    email: string,
    subject: string,
    message: string,
  ) {
    await this.name.fill(name);
    await this.email.fill(email);
    await this.subject.fill(subject);
    await this.message.fill(message);

    await this.submitButton.click();
  }
}
