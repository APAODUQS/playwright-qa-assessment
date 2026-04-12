import { expect, test } from "../../fixtures";

test.describe("Login page unit UI test @login", () => {

  test.beforeEach(async ({ loginActions }) => {
    await loginActions.gotoLoginPage();
  });
  
  test("Login into the page successfully @login-01", async ({
    loginActions,
  }) => {
    await loginActions.loginToApp();
  });

  test("Login a blocked account is unsuccessful @login-02", async ({
    loginActions,
  }) => {
    await loginActions.typeLoginParametersAndLogin("locked_out_user");
    expect(await loginActions.getErrorMessage()).toEqual("Epic sadface: Sorry, this user has been locked out.");
  });  

    test("Login Message with a wrong account or password @login-03", async ({
    loginActions,
  }) => {
    await loginActions.typeLoginParametersAndLogin("wrong_user", "wrong_password");
    expect(await loginActions.getErrorMessage()).toEqual("Epic sadface: Username and password do not match any user in this service");
  }); 

    test("Login Message with an empty account @login-04", async ({
    loginActions,
  }) => {
    await loginActions.typeLoginParametersAndLogin("");
    expect(await loginActions.getErrorMessage()).toEqual("Epic sadface: Username is required");
  }); 

    test("Login with an empty password @login-05", async ({
    loginActions,
  }) => {
    await loginActions.typeLoginParametersAndLogin("user","");
    expect(await loginActions.getErrorMessage()).toEqual("Epic sadface: Password is required");
  }); 
});
