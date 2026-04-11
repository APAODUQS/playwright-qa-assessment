import { expect } from "@playwright/test";
import { CatalogComponent } from "../../components/catalog/catalog";
import { RandomDataGenerator } from "../../utils/random-values";

export class CatalogActions extends CatalogComponent {
  async checkCatalog(): Promise<void> {
    await expect(
      this.inventoryContainer,
      "Catalog container should be visible",
    ).toBeVisible();
  }

  async clickOnProduct(productName?: string): Promise<void> {
    await this.checkCatalog();
    let item = 0;
    if (!productName) {
      const totalProducts = await this.inventoryItemContainer.count();
      item = RandomDataGenerator.generateRandomValue(0, totalProducts - 1);
    } else {
      item = await this.getProductItemByName(productName);
    }
    const product = this.inventoryItemContainer.nth(item);
    await product.click();
  }

  async addProductToCart(productName?: string): Promise<void> {
    await this.checkCatalog();
    let product = "";
    if (!productName) {
      product = await this.selectRandomProduct();
      product = this.BTN_ADD_TO_CART.replace(
        "PRODUCT_NAME",
        product.replace(/\s/g, "-").toLowerCase(),
      );
    }
    await this.catalog.locator(productName ?? product).click();
  }

  async removeProductFromCart(productName?: string): Promise<void> {
    await this.checkCatalog();
    let product = "";
    if (!productName) {
      product = await this.selectRandomProduct();
      product = this.BTN_REMOVE.replace(
        "PRODUCT_NAME",
        product.replace(/\s/g, "-").toLowerCase(),
      );
    }
    await this.catalog.locator(productName ?? product).click();
  }

  async selectRandomProduct(): Promise<string> {
    const totalProducts = await this.inventoryItemContainer.count();
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
}
