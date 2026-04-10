import { expect } from "@playwright/test";
import { CatalogComponent } from "../../components/catalog/catalog";

export class CatalogActions extends CatalogComponent {
  async checkCatalog(): Promise<void> {
    await expect(
      this.inventoryContainer,
      "Catalog container should be visible",
    ).toBeVisible();
  }
}
