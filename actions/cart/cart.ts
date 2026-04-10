import { expect } from "@playwright/test";
import { CartComponent } from "../../components/cart/cart";

export class CartActions extends CartComponent {
  async checkCart(): Promise<void> {
    await expect(
      this.cartContainer,
      "Cart container should be visible",
    ).toBeVisible();
  }
}
