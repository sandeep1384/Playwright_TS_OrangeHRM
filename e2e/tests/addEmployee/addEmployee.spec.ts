import { expect, test } from "@playwright/test";
import { ENV } from "../../../config/env";
import LoginPage from "@pages/loginPage";
import AddEmployeePage from "@pages/addEmployeePage";
import { getRandomEmployeeDetails } from "@e2e/testdata/random";

test("Add Employee", async ({ page }) => {
  await page.goto(ENV.URL);
  const loginPage = new LoginPage(page);
  const homePage = await loginPage.login(ENV.USERNAME, ENV.PASSWORD);

  await homePage.getLeftMenuComponent().selectLeftMenuItem("PIM");
  await homePage.getTopMenuComponent().selectTopMenuItem("Add Employee");

  const addEmployeePage = new AddEmployeePage(page);
  await addEmployeePage.addEmployee(getRandomEmployeeDetails());

  await expect(addEmployeePage.successMessage).toBeVisible();
});
