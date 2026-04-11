import { expect } from "@playwright/test";
import { ProductComponent } from "../../components/product/product";

export class ProductActions extends ProductComponent {
  async checkProduct(): Promise<void> {
    await expect(
      this.productContainer,
      "Product container should be visible",
    ).toBeVisible();
  }

  async addToCart(): Promise<void> {
    await this.checkProduct();
    await this.btnAddToCart.click();
  }

  async removeFromCart(): Promise<void> {
    await this.checkProduct();
    await this.btnRemove.click();
  }

  async backToProducts(): Promise<void> {
    await this.checkProduct();
    await this.lnkBack.click();
  }
}
