import { expect } from '@playwright/test'
import { LoginComponent } from '../../components/login/login'

export class LoginActions extends LoginComponent {

  async loginToApp(): Promise<void> {
    await this.login.goto(process.env.BASE_URL ?? '');
    await expect(this.loginContainer, 'Login container should be visible').toBeVisible()
    await this.txtUsername.fill(process.env.ACCOUNT ?? '')
    await this.txtPassword.fill(process.env.PASSWORD ?? '')
    await this.btnSignIn.click()
  }

}
