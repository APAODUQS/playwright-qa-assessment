import { Locator, Page } from "@playwright/test";

export class CheckoutComponent {
  readonly checkout: Page;
  readonly checkoutContainer: Locator;
  readonly txtFirstName: Locator;
  readonly txtLastName: Locator;
  readonly txtPostalCode: Locator;
  readonly btnContinue: Locator;
  readonly btnCancel: Locator;

  constructor(checkout: Page) {
    this.checkout = checkout;
    this.checkoutContainer = checkout.getByTestId("checkout-info-container");
    this.txtFirstName = checkout.getByTestId("firstName");
    this.txtLastName = checkout.getByTestId("lastName");
    this.txtPostalCode = checkout.getByTestId("postalCode");
    this.btnContinue = checkout.getByTestId("continue");
    this.btnCancel = checkout.getByTestId("cancel");
  }
}
