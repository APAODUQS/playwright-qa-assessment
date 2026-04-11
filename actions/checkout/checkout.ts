import { expect } from "@playwright/test";
import { CheckoutComponent } from "../../components/checkout/checkout";
import { RandomDataGenerator } from "../../utils/random-values";

export class CheckoutActions extends CheckoutComponent {
  async checkCheckout(): Promise<void> {
    await expect(
      this.checkoutContainer,
      "Checkout container should be visible",
    ).toBeVisible();
  }

  async setFirstName(firstName: string): Promise<void> {
    await this.txtFirstName.fill(firstName);
  }

  async setLastName(lastName: string): Promise<void> {
    await this.txtLastName.fill(lastName);
  }

  async setPostalCode(postalCode: string): Promise<void> {
    await this.txtPostalCode.fill(postalCode);
  }

  async clickContinue(): Promise<void> {
    await this.checkCheckout();
    await this.btnContinue.click();
  }

  async clickCancel(): Promise<void> {
    await this.checkCheckout();
    await this.btnCancel.click();
  }

  async fillCheckoutInformation(): Promise<void> {
    await this.checkCheckout();
    await this.setFirstName(RandomDataGenerator.generateRandomName());
    await this.setLastName(RandomDataGenerator.generateRandomLastname());
    await this.setPostalCode(RandomDataGenerator.generateRandomPostalCode());
  }
}
