import { componentFixture as baseTest } from "./components.fixture";
import {
  CartActions,
  CatalogActions,
  CheckoutActions,
  CheckoutCompleteActions,
  ConfirmationActions,
  HeaderActions,
  LoginActions,
  ProductActions,
} from "../actions";
import { Page } from "@playwright/test";

export type ActionsFixture = {
  loginActions: LoginActions;
  headerActions: HeaderActions;
  catalogActions: CatalogActions;
  productActions: ProductActions;
  cartActions: CartActions;
  checkoutActions: CheckoutActions;
  confirmationActions: ConfirmationActions;
  checkoutCompleteActions: CheckoutCompleteActions;
};

type ActionConstructor<T> = new (page: Page) => T;

function createAction<T>(
  actionConstructor: ActionConstructor<T>,
): (args: { page: Page }, use: (value: T) => Promise<void>) => Promise<void> {
  return async ({ page }, use) => {
    const action = new actionConstructor(page);
    await use(action);
  };
}

const base = baseTest.extend<ActionsFixture>({
  loginActions: createAction(LoginActions),
  headerActions: createAction(HeaderActions),
  catalogActions: createAction(CatalogActions),
  productActions: createAction(ProductActions),
  cartActions: createAction(CartActions),
  checkoutActions: createAction(CheckoutActions),
  confirmationActions: createAction(ConfirmationActions),
  checkoutCompleteActions: createAction(CheckoutCompleteActions),
});

export const test = base;
export { expect } from "@playwright/test";
