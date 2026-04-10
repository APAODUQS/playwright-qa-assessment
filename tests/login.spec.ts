import { test } from '../fixtures';

test('Login into the page', async ({ loginActions }) => {
  await loginActions.loginToApp();
});
