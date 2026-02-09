import { Page, Locator } from "@playwright/test";
import HomePage from "./homePage";

class LoginPage {
  private readonly page: Page;
  private readonly userNameTextBox: Locator;
  private readonly passwordTextBox: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameTextBox = page.getByPlaceholder("Username");
    this.passwordTextBox = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "login" });
  }

  async login(username: string, password: string) {
    await this.userNameTextBox.fill(username);
    await this.passwordTextBox.fill(password);
    await this.loginButton.click();
    return new HomePage(this.page);
  }
}

export default LoginPage;
