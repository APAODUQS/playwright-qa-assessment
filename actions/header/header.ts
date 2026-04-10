import { expect } from "@playwright/test";
import { HeaderComponent } from "../../components/header/header";

export class HeaderActions extends HeaderComponent {
  async checkHeader(): Promise<void> {
    await expect(
      this.headerContainer,
      "Header container should be visible",
    ).toBeVisible();
  }
}
