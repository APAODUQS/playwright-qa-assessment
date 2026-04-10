import base from "@playwright/test";

export const browsersFixture = base.extend({
  page: async ({ page }, use, testInfo) => {
    testInfo.annotations.push({
      type: "Execution date",
      description: new Date().toString(),
    });
    await use(page);
  },
});

export { expect } from "@playwright/test";
