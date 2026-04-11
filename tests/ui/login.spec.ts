import { test } from "../../fixtures";

test.describe("Login page unit UI test @login", () => {
  test("Login into the page successfully @login-01", async ({
    loginActions,
  }) => {
    await loginActions.loginToApp();
  });
});
