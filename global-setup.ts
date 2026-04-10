import { chromium } from "@playwright/test";

const STORAGE_STATE_FILE = "storageState.json";

async function signInThroughUi() {
  const account = "standard_user";
  const password = "secret_sauce";
  const ignoreHTTPSErrors = true;

  const browser = await chromium.launch();
  const context = await browser.newContext({ ignoreHTTPSErrors });
  const page = await context.newPage();

  await page.goto("https://www.saucedemo.com/", { timeout: 0 });
  await page.locator('[data-test="username"]').fill(account);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();
  await page.context().storageState({ path: STORAGE_STATE_FILE });
  await browser.close();
}

async function globalSetup() {
  await signInThroughUi();
}

export default globalSetup;
