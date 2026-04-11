import { expect } from "@playwright/test";
import { CheckoutCompleteComponent } from "../../components/checkout-complete/checkout-complete";

export class CheckoutCompleteActions extends CheckoutCompleteComponent {
  async checkCheckoutComplete(): Promise<void> {
    await expect(
      this.checkoutContainer,
      "Checkout-Complete container should be visible",
    ).toBeVisible();
  }

  async checkCheckoutCompleteTitle(): Promise<void> {
    await this.checkCheckoutComplete();
    await expect(
      this.checkoutCompleteTitle,
      "Checkout-Complete title should be visible",
    ).toBeVisible();
  }

  async clickBtnBackHome(): Promise<void> {
    await this.checkCheckoutComplete();
    await this.btnBackHome.click();
  }
}
