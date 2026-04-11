import { Locator, Page } from "@playwright/test";

export class CheckoutCompleteComponent {
  readonly checkoutComplete: Page;
  readonly checkoutContainer: Locator;
  readonly checkoutCompleteTitle: Locator;
  readonly btnBackHome: Locator;

  constructor(checkoutComplete: Page) {
    this.checkoutComplete = checkoutComplete;
    this.checkoutContainer = checkoutComplete.getByTestId(
      "checkout-complete-container",
    );
    this.checkoutCompleteTitle =
      checkoutComplete.getByTestId("complete-header");
    this.btnBackHome = checkoutComplete.getByTestId("back-to-products");
  }
}
