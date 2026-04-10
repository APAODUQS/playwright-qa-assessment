import { expect } from "@playwright/test";
import { ProductComponent } from "../../components/product/product";

export class ProductActions extends ProductComponent {
  async checkProduct(): Promise<void> {
    await expect(
      this.productContainer,
      "Product container should be visible",
    ).toBeVisible();
  }
}
