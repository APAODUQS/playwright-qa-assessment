import { expect } from "@playwright/test";
import { LoginComponent } from "../../components/login/login";

export class LoginActions extends LoginComponent {
  async checkLoginPage(): Promise<void> {
    await expect(
      this.loginContainer,
      "Login container should be visible",
    ).toBeVisible();
  }

  async loginToApp(): Promise<void> {
    await this.login.goto(process.env.BASE_URL ?? "");
    await this.checkLoginPage();
    await this.txtUsername.fill(process.env.ACCOUNT ?? "");
    await this.txtPassword.fill(process.env.PASSWORD ?? "");
    await this.btnSignIn.click();
  }
}
