import { componentFixture as baseTest } from "./components.fixture";
import { LoginActions } from "../actions";
import { Page } from "@playwright/test";

export type ActionsFixture = {
  loginActions: LoginActions;
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
});

export const test = base;
export { expect } from "@playwright/test";
