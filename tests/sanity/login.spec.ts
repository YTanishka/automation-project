import {test , expect} from "@playwright/test"
import { HomePage } from "../../pages/HomePage"
import { LoginPage } from "../../pages/LoginPage"

import userData from "../../test-data/user.json"

test("@sanity Login with credentials",async ({page})=>{
    
    const homePage = new HomePage(page)

    const loginPage = new LoginPage(page)

    await page.goto("/")

    await homePage.clicksignupLogin()

    await  loginPage.login(userData.validUser.email,userData.validUser.password)

    await expect(loginPage.loggedInAs).toBeVisible();
})