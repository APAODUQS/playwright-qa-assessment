import { Locator, Page } from "@playwright/test";

export class ConfirmationComponent {
  readonly confirmation: Page;
  readonly confirmationContainer: Locator;
  readonly productContainer: Locator;
  readonly btnFinish: Locator;
  readonly btnCancel: Locator;

  constructor(confirmation: Page) {
    this.confirmation = confirmation;
    this.confirmationContainer = confirmation.getByTestId(
      "checkout-summary-container",
    );
    this.productContainer = confirmation.getByTestId("inventory-item");
    this.btnFinish = confirmation.getByTestId("finish");
    this.btnCancel = confirmation.getByTestId("cancel");
  }
}
