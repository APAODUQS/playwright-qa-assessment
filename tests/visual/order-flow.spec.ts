import { expect, test } from "../../fixtures";

const snapshotDir = "snapshot";
const VISUAL_PIXEL_RATIO: number = 0.11;

test.describe("Complete order flow visual tests @VT-01", () => {
  test("Pages on complete flow to create orders are displayed correctly", async ({
    loginActions,
    headerActions,
    catalogActions,
    productActions,
    cartActions,
    checkoutActions,
    confirmationActions,
    checkoutCompleteActions,
  }) => {
    await test.step("Login page should be displayed correctly", async () => {
      await loginActions.gotoLoginPage();
      expect
        .soft(
          await loginActions.login.screenshot({
            mask: [loginActions.txtUsername, loginActions.txtPassword],
          }),
          "Login Page does not match",
        )
        .toMatchSnapshot([snapshotDir, "login-page.png"], {
          maxDiffPixelRatio: VISUAL_PIXEL_RATIO,
        });
    });

    await test.step("Catalog page should be displayed correctly", async () => {
      await loginActions.loginToApp();
      expect
        .soft(
          await catalogActions.catalog.screenshot({
            mask: [
              catalogActions.imgProduct,
              catalogActions.lblProductName,
              catalogActions.lblProductDescription,
              catalogActions.lblProductPrice,
            ],
          }),
          "Catalog Page does not match",
        )
        .toMatchSnapshot([snapshotDir, "catalog-page.png"], {
          maxDiffPixelRatio: VISUAL_PIXEL_RATIO,
        });
    });

    await test.step("Product page should be displayed correctly", async () => {
      await catalogActions.clickOnProduct();
      expect
        .soft(
          await productActions.product.screenshot({
            mask: [
              productActions.imgProduct,
              productActions.lblProductName,
              productActions.lblProductDescription,
              productActions.lblProductPrice,
            ],
          }),
          "Product Page does not match",
        )
        .toMatchSnapshot([snapshotDir, "product-page.png"], {
          maxDiffPixelRatio: VISUAL_PIXEL_RATIO,
        });
    });

    await test.step("Cart page should be displayed correctly", async () => {
      await productActions.addToCart();
      await headerActions.clickCartIcon();
      const pricelocator = '//*[@data-test="inventory-item-price"]/..';
      expect
        .soft(
          await cartActions.cart.screenshot({
            mask: [
              cartActions.lblProductName,
              cartActions.lblProductDescription,
              cartActions.cart.locator(pricelocator),
            ],
          }),
          "Cart Page does not match",
        )
        .toMatchSnapshot([snapshotDir, "cart-page.png"], {
          maxDiffPixelRatio: VISUAL_PIXEL_RATIO,
        });
    });

    await test.step("Checkout page should be displayed correctly", async () => {
      await cartActions.clickCheckout();
      expect
        .soft(
          await checkoutActions.checkout.screenshot({
            mask: [
              checkoutActions.txtFirstName,
              checkoutActions.txtLastName,
              checkoutActions.txtPostalCode,
            ],
          }),
          "Checkout Page does not match",
        )
        .toMatchSnapshot([snapshotDir, "checkout-page.png"], {
          maxDiffPixelRatio: VISUAL_PIXEL_RATIO,
        });
    });

    await test.step("Comfirmation page should be displayed correctly", async () => {
      await checkoutActions.fillCheckoutInformation();
      await checkoutActions.clickContinue();
      const pricelocator = '//*[@data-test="inventory-item-price"]/..';
      expect
        .soft(
          await confirmationActions.confirmation.screenshot({
            mask: [
              confirmationActions.lblProductName,
              confirmationActions.lblProductDescription,
              confirmationActions.confirmation.locator(pricelocator),
              confirmationActions.lblPaymentData,
              confirmationActions.lblTotalItems,
              confirmationActions.lblTotalPrice,
              confirmationActions.lblTax,
            ],
          }),
          "Confirmation Page does not match",
        )
        .toMatchSnapshot([snapshotDir, "confirmation-page.png"], {
          maxDiffPixelRatio: VISUAL_PIXEL_RATIO,
        });
    });

    await test.step("Checkout Complete page should be displayed correctly", async () => {
      await confirmationActions.clickFinish();
      expect
        .soft(
          await checkoutCompleteActions.checkoutComplete.screenshot(),
          "Checkout Complete Page does not match",
        )
        .toMatchSnapshot([snapshotDir, "checkout-complete-page.png"], {
          maxDiffPixelRatio: VISUAL_PIXEL_RATIO,
        });
    });

    await test.step("Menu should be displayed correctly", async () => {
      await headerActions.clickMenuIcon();
      expect(
        await checkoutCompleteActions.checkoutComplete.screenshot(),
        "Menu does not match",
      ).toMatchSnapshot([snapshotDir, "menu.png"], {
        maxDiffPixelRatio: VISUAL_PIXEL_RATIO,
      });
    });
  });
});
