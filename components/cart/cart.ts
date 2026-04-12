import { Locator, Page } from "@playwright/test";

export class CartComponent {
  readonly BTN_REMOVE = '[data-test="remove-PRODUCT_NAME"]';

  readonly cart: Page;
  readonly cartContainer: Locator;
  readonly productContainer: Locator;
  readonly lblProductName: Locator;
  readonly lblProductDescription: Locator;
  readonly lblProductPrice: Locator;
  readonly btnContinueShopping: Locator;
  readonly btnCheckout: Locator;

  constructor(cart: Page) {
    this.cart = cart;
    this.cartContainer = cart.getByTestId("cart-contents-container");
    this.productContainer = cart.getByTestId("inventory-item");
    this.lblProductName = cart.getByTestId("inventory-item-name");
    this.lblProductDescription = cart.getByTestId("inventory-item-desc");
    this.lblProductPrice = cart.getByTestId("inventory-item-price");
    this.btnContinueShopping = cart.getByTestId("continue-shopping");
    this.btnCheckout = cart.getByTestId("checkout");
  }
}
