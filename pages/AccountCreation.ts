import { Page, Locator } from "@playwright/test";

export class AccountCreationPage {
  readonly page: Page;

  readonly title: Locator;
  readonly password: Locator;
  readonly day: Locator;
  readonly month: Locator;
  readonly year: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly company: Locator;
  readonly address: Locator;
  readonly address2: Locator;
  readonly country: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly zipcode: Locator;
  readonly mobileNumber: Locator;
  readonly createAccount: Locator;

  constructor(page: Page) {
    this.page = page;

    this.title = page.getByText("Enter Account Information");

    this.password = page.locator("#password");
    this.day = page.locator("#days");
    this.month = page.locator("#months");
    this.year = page.locator("#years");

    this.firstName = page.locator("#first_name");
    this.lastName = page.locator("#last_name");
    this.company = page.locator("#company");
    this.address = page.locator("#address1");
    this.address2 = page.locator("#address2");
    this.country = page.locator("#country");
    this.state = page.locator("#state");
    this.city = page.locator("#city");
    this.zipcode = page.locator("#zipcode");
    this.mobileNumber = page.locator("#mobile_number");
    this.createAccount = page.getByRole("button", { name: "Create Account" });
  }
  async CreateAccount(
    password: string,
    day: string,
    month: string,
    year: string,
    firstName: string,
    lastName: string,
    company: string,
    address: string,
    address2: string,
    country: string,
    state: string,
    city: string,
    zipcode: string,
    mobileNumber: string,
  ) {
    await this.password.fill(password);

    await this.day.selectOption(day);
    await this.month.selectOption(month);
    await this.year.selectOption(year);

    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.company.fill(company);
    await this.address.fill(address);
    await this.address2.fill(address2);

    await this.country.selectOption({ label: country });

    await this.state.fill(state);
    await this.city.fill(city);
    await this.zipcode.fill(zipcode);
    await this.mobileNumber.fill(mobileNumber);

    await this.createAccount.click();
  }
}
