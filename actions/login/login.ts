import { expect } from "@playwright/test";
import { LoginComponent } from "../../components/login/login";

export class LoginActions extends LoginComponent {
  async checkLoginPage(): Promise<void> {
    await expect(
      this.loginContainer,
      "Login container should be visible",
    ).toBeVisible();
  }

  async gotoLoginPage(): Promise<void> {
    await this.login.goto(process.env.BASE_URL ?? "");
    await this.checkLoginPage();
  }

  async loginToApp(): Promise<void> {
    await this.gotoLoginPage();
    await this.typeLoginParametersAndLogin();
  }

  async typeLoginParametersAndLogin(username?: string, password?: string): Promise<void> {
    await this.txtUsername.fill(username ?? process.env.ACCOUNT ?? "");
    await this.txtPassword.fill(password ?? process.env.PASSWORD ?? "");
    await this.btnSignIn.click();
  }

  async getErrorMessage(): Promise<string> {
    return await this.messageError.textContent() ?? "";
  }
}
