import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly loggedInAs:Locator
   readonly loginError: Locator;

  constructor(page: Page) {
    this.page = page;

    this.email = page.locator('input[data-qa="login-email"]');
    this.password = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.loggedInAs=page.getByText(/Logged in as/)
     this.loginError = page.getByText(
      "Your email or password is incorrect!"
    );
    
  }

  async login(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
  }
  async verifyLoginSuccessful(){
    await this.loggedInAs.waitFor({state: "visible"})
  }
}
