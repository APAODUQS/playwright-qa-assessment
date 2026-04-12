import { Locator, Page } from "@playwright/test";

export class ProductComponent {
  readonly IMG_PRODUCT = '[data-test="inventory-item-PRODUCT_NAME-img"]';

  readonly product: Page;
  readonly productContainer: Locator;
  readonly lnkBack: Locator;
  readonly imgProduct: Locator;
  readonly lblProductName: Locator;
  readonly lblProductDescription: Locator;
  readonly lblProductPrice: Locator;
  readonly btnAddToCart: Locator;
  readonly btnRemove: Locator;

  constructor(product: Page) {
    this.product = product;
    this.productContainer = product.getByTestId("inventory-item");
    this.lnkBack = product.getByTestId("back-to-products");
    this.imgProduct = product.locator('[data-test*="-img"]');
    this.lblProductName = product.getByTestId("inventory-item-name");
    this.lblProductDescription = product.getByTestId("inventory-item-desc");
    this.lblProductPrice = product.getByTestId("inventory-item-price");
    this.btnAddToCart = product.getByTestId("add-to-cart");
    this.btnRemove = product.getByTestId("remove");
  }
}
