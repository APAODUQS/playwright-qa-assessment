import { expect } from "@playwright/test";
import { CartComponent } from "../../components/cart/cart";
import { RandomDataGenerator } from "../../utils/random-values";

export class CartActions extends CartComponent {
  async checkCart(): Promise<void> {
    await expect(
      this.cartContainer,
      "Cart container should be visible",
    ).toBeVisible();
  }

  async clickOnProduct(productName?: string): Promise<void> {
    await this.checkCart();
    let item = 0;
    if (!productName) {
      const totalProducts = await this.productContainer.count();
      item = RandomDataGenerator.generateRandomValue(0, totalProducts - 1);
    } else {
      item = await this.getProductItemByName(productName);
    }
    const product = this.productContainer.nth(item);
    await product.click();
  }

  async removeProductFromCart(productName?: string): Promise<void> {
    await this.checkCart();
    let product = "";
    if (!productName) {
      product = await this.selectRandomProduct();
      product = this.BTN_REMOVE.replace(
        "PRODUCT_NAME",
        product.replace(/\s/g, "-").toLowerCase(),
      );
    }
    await this.cart.locator(productName ?? product).click();
  }

  async selectRandomProduct(): Promise<string> {
    const totalProducts = await this.productContainer.count();
    const item = RandomDataGenerator.generateRandomValue(0, totalProducts - 1);
    return await this.getProductByName(item);
  }

  async getProductByName(item: number): Promise<string> {
    return (await this.lblProductName.nth(item).textContent()) ?? "";
  }

  async getProductItemByName(productName: string): Promise<number> {
    let i = 0;
    for (const product of await this.lblProductName.allTextContents()) {
      if (product === productName) {
        break;
      }
      i++;
    }
    return i;
  }

  async clickContinueShopping(): Promise<void> {
    await this.checkCart();
    await this.btnContinueShopping.click();
  }

  async clickCheckout(): Promise<void> {
    await this.checkCart();
    await this.btnCheckout.click();
  }
}
