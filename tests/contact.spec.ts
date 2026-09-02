import { test, expect } from "@playwright/test";
import { ContactUsPage } from "../pages/ContactUs";
import userData from "../test-data/user.json";

test("Fill Contact Us Form", async ({ page }) => {
  await page.goto("https://automationexercise.com");

  const contactUsPage = new ContactUsPage(page);

  await page.getByText("Contact us").click();

  await expect(page.getByText("Get In Touch")).toBeVisible();

  await contactUsPage.submitContactUsPage(
    userData.contactDetails.name,
    userData.contactDetails.email,
    userData.contactDetails.subject,
    userData.contactDetails.message,
  );

  

  await page.getByRole("button", { name: "submit" }).click();

  
});
