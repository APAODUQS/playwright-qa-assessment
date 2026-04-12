import { Locator, Page } from "@playwright/test";

export class CatalogComponent {
  readonly BTN_ADD_TO_CART = '[data-test="add-to-cart-PRODUCT_NAME"]';
  readonly BTN_REMOVE = '[data-test="remove-PRODUCT_NAME"]';
  readonly IMG_PRODUCT = '[data-test="inventory-item-PRODUCT_NAME-img"]';

  readonly catalog: Page;
  readonly inventoryContainer: Locator;
  readonly inventoryItemContainer: Locator;
  readonly imgProduct: Locator;
  readonly lblProductName: Locator;
  readonly lblProductDescription: Locator;
  readonly lblProductPrice: Locator;
  readonly filter: Locator;

  constructor(catalog: Page) {
    this.catalog = catalog;
    this.inventoryContainer = catalog.getByTestId("inventory-container");
    this.inventoryItemContainer = catalog.getByTestId("inventory-item");
    this.imgProduct = catalog.locator('[data-test*="-img"]');
    this.lblProductName = catalog.getByTestId("inventory-item-name");
    this.lblProductDescription = catalog.getByTestId("inventory-item-desc");
    this.lblProductPrice = catalog.getByTestId("inventory-item-price");
    this.filter = catalog.getByTestId("product-sort-container");
  }
}
