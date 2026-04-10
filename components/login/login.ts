import { Locator, Page } from "@playwright/test";

export class LoginComponent {
  readonly login: Page;
  readonly txtUsername: Locator;
  readonly txtPassword: Locator;
  readonly btnSignIn: Locator;
  readonly loginContainer: Locator;

  constructor(login: Page) {
    this.login = login;
    this.txtUsername = login.getByTestId("username");
    this.txtPassword = login.getByTestId("password");
    this.btnSignIn = login.getByTestId("login-button");
    this.loginContainer = login.getByTestId("login-container");
  }
}
