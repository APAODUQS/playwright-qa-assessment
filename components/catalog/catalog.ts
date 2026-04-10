import { Locator, Page } from "@playwright/test";

export class CatalogComponent {
  readonly BTN_ADD_TO_CART = '[data-test="add-to-cart-PRODUCT_NAME"]';
  readonly BTN_REMOVE = '[data-test="remove-PRODUCT_NAME"]';

  readonly catalog: Page;
  readonly inventoryContainer: Locator;
  readonly inventoryItemContainer: Locator;
  readonly lblProductName: Locator;
  readonly filter: Locator;

  constructor(catalog: Page) {
    this.catalog = catalog;
    this.inventoryContainer = catalog.getByTestId("inventory-container");
    this.inventoryItemContainer = catalog.getByTestId("inventory-item");
    this.lblProductName = catalog.getByTestId("inventory-item-name");
    this.filter = catalog.getByTestId("product-sort-container");
  }
}
