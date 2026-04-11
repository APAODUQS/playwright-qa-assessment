import { expect } from "@playwright/test";
import { ConfirmationComponent } from "../../components/confirmation/confirmation";
import { RandomDataGenerator } from "../../utils/random-values";

export class ConfirmationActions extends ConfirmationComponent {
  async checkConfirmation(): Promise<void> {
    await expect(
      this.confirmationContainer,
      "Confirmation container should be visible",
    ).toBeVisible();
  }

  async clickOnProduct(productName?: string): Promise<void> {
    await this.checkConfirmation();
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

  async clickFinish(): Promise<void> {
    await this.checkConfirmation();
    await this.btnFinish.click();
  }

  async clickCancel(): Promise<void> {
    await this.checkConfirmation();
    await this.btnCancel.click();
  }
}
