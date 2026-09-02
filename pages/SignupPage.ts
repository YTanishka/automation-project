import  {Page, Locator} from "@playwright/test"

export class SignupPage{
    readonly page: Page
    readonly name: Locator
    readonly email: Locator
    readonly signupButton: Locator

    constructor(page:Page){
        this.page = page

        this.name = page.locator('input[data-qa="signup-name"]')
        this.email = page.locator('input[data-qa="signup-email"]')
        this.signupButton = page.locator('button[data-qa="signup-button"]')
    }
    async signup(name: string, email: string){
        await this.name.fill(name)
        await this.email.fill(email)
        await this.signupButton.click()
    }
}