import { expect } from "@playwright/test";
import { ConfirmationComponent } from "../../components/confirmation/confirmation";

export class ConfirmationActions extends ConfirmationComponent {
  async checkConfirmation(): Promise<void> {
    await expect(
      this.confirmationContainer,
      "Confirmation container should be visible",
    ).toBeVisible();
  }
}
