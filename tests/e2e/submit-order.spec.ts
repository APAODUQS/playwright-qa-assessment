import { test } from "../../fixtures";

test.describe("Submit order @E2E-01", () => {
  test("Add a product to the cart and checkout successfully", async ({
    loginActions,
    headerActions,
    catalogActions,
    cartActions,
    checkoutActions,
    confirmationActions,
    checkoutCompleteActions,
  }) => {
    await loginActions.loginToApp();
    await catalogActions.addProductToCart();
    await headerActions.clickCartIcon();
    await cartActions.clickCheckout();
    await checkoutActions.fillCheckoutInformation();
    await checkoutActions.clickContinue();
    await confirmationActions.clickFinish();
    await checkoutCompleteActions.checkCheckoutCompleteTitle();
    await checkoutCompleteActions.clickBtnBackHome();
    await catalogActions.checkCatalog();
    await headerActions.logout();
    await loginActions.checkLoginPage();
  });
});
