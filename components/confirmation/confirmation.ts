import { Locator, Page } from "@playwright/test";

export class ConfirmationComponent {
  readonly confirmation: Page;
  readonly confirmationContainer: Locator;
  readonly productContainer: Locator;
  readonly lblProductName: Locator;
  readonly lblProductDescription: Locator;
  readonly lblProductPrice: Locator;
  readonly lblPaymentData: Locator;
  readonly lblTotalItems: Locator;
  readonly lblTotalPrice: Locator;
  readonly lblTax: Locator;
  readonly btnFinish: Locator;
  readonly btnCancel: Locator;

  constructor(confirmation: Page) {
    this.confirmation = confirmation;
    this.confirmationContainer = confirmation.getByTestId(
      "checkout-summary-container",
    );
    this.productContainer = confirmation.getByTestId("inventory-item");
    this.lblProductName = confirmation.getByTestId("inventory-item-name");
    this.lblProductDescription = confirmation.getByTestId(
      "inventory-item-desc",
    );
    this.lblProductPrice = confirmation.getByTestId("inventory-item-price");
    this.lblPaymentData = confirmation.getByTestId("payment-info-value");
    this.lblTotalItems = confirmation.getByTestId("subtotal-label");
    this.lblTotalPrice = confirmation.getByTestId("total-label");
    this.lblTax = confirmation.getByTestId("tax-label");
    this.btnFinish = confirmation.getByTestId("finish");
    this.btnCancel = confirmation.getByTestId("cancel");
  }
}
