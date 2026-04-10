import { expect } from "@playwright/test";
import { CheckoutComponent } from "../../components/checkout/checkout";

export class CheckoutActions extends CheckoutComponent {
  async checkCheckout(): Promise<void> {
    await expect(
      this.checkoutContainer,
      "Checkout container should be visible",
    ).toBeVisible();
  }
}
