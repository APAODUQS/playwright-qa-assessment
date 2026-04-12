import { beforeEach } from "node:test";
import { expect, test } from "../../fixtures";

test.describe("Catalog page unit UI test @catalog", () => {
  test("Order catalog by price (low to high) @catalog-01", async ({
    catalogActions,
  }) => {
    await catalogActions.gotoCatalogPage();
    await catalogActions.sortProductsBy("Price (low to high)");
    const allPrices = await catalogActions.lblProductPrice.allTextContents();
    for (let i = 0; i < allPrices.length - 1; i++) {
      const price1 = parseFloat(allPrices[i].replace("$", ""));
      const price2 = parseFloat(allPrices[i + 1].replace("$", ""));
      expect(price2).toBeGreaterThanOrEqual(price1);
    }
  });
});
