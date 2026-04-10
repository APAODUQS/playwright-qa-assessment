import { expect } from "@playwright/test";
import { CheckoutCompleteComponent } from "../../components/checkout-complete/checkout-complete";

export class CheckoutCompleteActions extends CheckoutCompleteComponent {
  async checkCheckoutComplete(): Promise<void> {
    await expect(
      this.checkoutContainer,
      "Checkout-Complete container should be visible",
    ).toBeVisible();
  }
}
