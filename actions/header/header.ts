import { expect } from "@playwright/test";
import { HeaderComponent } from "../../components/header/header";

export class HeaderActions extends HeaderComponent {
  async checkHeader(): Promise<void> {
    await expect(
      this.headerContainer,
      "Header container should be visible",
    ).toBeVisible();
  }

  async clickCartIcon(): Promise<void> {
    await this.checkHeader();
    await this.btnCart.click();
  }

  async clickMenuIcon(): Promise<void> {
    await this.checkHeader();
    await this.btnMenu.click();
  }

  async logout(): Promise<void> {
    await this.clickMenuIcon();
    await this.logoutOptions.click();
  }

  async clickAllItemsOption(): Promise<void> {
    await this.allItemsOptions.click();
  }

  async clickAboutOption(): Promise<void> {
    await this.aboutOptions.click();
  }

  async clickResetAppStateOption(): Promise<void> {
    await this.resetAppStateOptions.click();
  }
}
