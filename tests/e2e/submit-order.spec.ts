import { test } from "../../fixtures";

test.describe("Submit order @E2E-01", () => {
  test("Add a product to the cart and checkout successfully", async ({
    loginActions,
  }) => {
    await loginActions.loginToApp();
  });
});
