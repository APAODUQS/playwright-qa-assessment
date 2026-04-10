import { browsersFixture as baseTest } from "./browsers.fixture";
import {
  CartComponent,
  HeaderComponent,
  CatalogComponent,
  CheckoutComponent,
  LoginComponent,
  ProductComponent,
  CheckoutCompleteComponent,
  ConfirmationComponent,
} from "../components/index";

export type ComponentsFixture = {
  loginComponent: LoginComponent;
  headerComponent: HeaderComponent;
  catalogComponent: CatalogComponent;
  productComponent: ProductComponent;
  cartComponent: CartComponent;
  checkoutComponent: CheckoutComponent;
  confirmationComponent: ConfirmationComponent;
  checkoutCompleteComponent: CheckoutCompleteComponent;
};

const base = baseTest.extend<ComponentsFixture>({
  loginComponent: async ({ page }, use) => {
    const loginComponent = new LoginComponent(page);
    await use(loginComponent);
  },
  headerComponent: async ({ page }, use) => {
    const headerComponent = new HeaderComponent(page);
    await use(headerComponent);
  },
  catalogComponent: async ({ page }, use) => {
    const catalogComponent = new CatalogComponent(page);
    await use(catalogComponent);
  },
  productComponent: async ({ page }, use) => {
    const productComponent = new ProductComponent(page);
    await use(productComponent);
  },
  cartComponent: async ({ page }, use) => {
    const cartComponent = new CartComponent(page);
    await use(cartComponent);
  },
  checkoutComponent: async ({ page }, use) => {
    const checkoutComponent = new CheckoutComponent(page);
    await use(checkoutComponent);
  },
  confirmationComponent: async ({ page }, use) => {
    const confirmationComponent = new ConfirmationComponent(page);
    await use(confirmationComponent);
  },
  checkoutCompleteComponent: async ({ page }, use) => {
    const checkoutCompleteComponent = new CheckoutCompleteComponent(page);
    await use(checkoutCompleteComponent);
  },
});

export const componentFixture = base;
export { expect } from "@playwright/test";
