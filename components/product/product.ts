import { Locator, Page } from "@playwright/test";

export class ProductComponent {
  readonly product: Page;
  readonly productContainer: Locator;
  readonly lnkBack: Locator;
  readonly btnAddToCart: Locator;
  readonly btnRemove: Locator;

  constructor(product: Page) {
    this.product = product;
    this.productContainer = product.getByTestId("inventory-item");
    this.lnkBack = product.getByTestId("back-to-products");
    this.btnAddToCart = product.getByTestId("add-to-cart");
    this.btnRemove = product.getByTestId("remove");
  }
}
