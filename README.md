# playwright-qa-assessment

This is an automation framework to test the application [SauceDemo](https://www.saucedemo.com). The application simulates a retail storefront.
This framework is being building with Playwright library and Playwright Test Runner.

### Available Modules

- Login / Auth: Username + password form, session cookie, error message on bad credentials
- Product Catalogue: Product grid, sort by name/price, product detail page
- Cart: Add / remove items, item count badge on header icon
- Checkout: 3-step flow: cart → customer info (first name, last name, zip) → order summary → confirmation
- Logout: Accessible via the burger menu

### Test User Accounts

Password for all accounts: secret_sauce

- standard_user: Fully functional. All happy-path and core tests
- locked_out_user: Login is blocked by the app. Negative auth / error state tests
- problem_user: Broken product images, some interactions fail. Visual / data assertion edge cases
- performance_glitch_user: Login and page loads are artificially delayed. Timeout / wait handling tests
- error_user: Intermittent form errors on checkout. Senior/Lead error-handling scenarios

## Documentation

If you want to know more about Playwright and Playwright/Test please visit:
[Playwright Docs](https://playwright.dev/docs/intro)

## Installation

1.  You need to have **Node.js version 20** installed or above and **npm version greather than 8.0.0**. If you are working in macOS it requires 11 (Big Sur) or above. We are using the playwright library for executing tests, then you have to install the library and the supported browsers:

```bash
Install playwright
npm i -D @playwright/test
# install supported browsers
npx playwright install
```

2. Clone this repository
   `git clone https://github.com/APAODUQS/playwright-qa-assessment.git`

3. Move to the folder:
   `cd playwright-qa-assessment`

4. Install dependencies
   `npm install `

5. Run all tests locally
   `npm run test `

If you dont get any issues at this point you are ready to use the Automation Framework

## Usage

This is an small test example:

```typescript:
// Import interfaces from playwright test
import { expect } from '@playwright/test'

// Use the test keyword to indicate you are creating a test and a proper description
// Pass the fixture you want to work in, in this case is a page that come from Playwright but you can create your own fixtures
test('basic test', async ({ page }) => {
  // Start: Navigation to a specific URL
  await page.goto('https://playwright.dev/')
  // Arrange: Find locators
  const title = page.locator('.navbar__inner .navbar__title')
  // Assert: Test validation
  await expect.soft(title, 'Some error message').toHaveText('Playwright')
})
```

## Execute the tests

This project includes a number of configurations to set up and run the tests:

1. The `playwright.config.ts` file includes the global configuration for Playwright. This file is used to specify the `globalSetup` file, along with any other global configurations.

2. The `global-setup.ts` file is run once before all test files in order to get and set the `storateStage.json`

3. Set the environment variables and create an .env file or export the variables from command line, example:

```
BASE_URL=https://www.saucedemo.com
ACCOUNT=standard_user
PASSWORD=*********
```

4. For executing all tests locally, execute:

```bash
npm run test
```

5. If you want to run a specific tests, you can use the scripts in the package.json:

- `test`: Execute all tests in all browsers.
- `test:e2e`: Execute e2e tests in all browsers.
- `test:ui`: Execute ui tests in all browsers.

In the same way if you want to run those tests in a specific browser you can run the script adding `-- --project YOUR_BROWSER`:

```
npm run test:e2e -- --project Chrome
```

6. Other ways to run the tests:

```bash
# To run specific test files, specify the route of the tests:
npx playwright test tests/TEST_CLASS.spec.ts --config=playwright.config.ts

# Run a set of test files
npx playwright test tests/TEST_CLASS_1/ tests/TEST_CLASS_2/

# Run files that have KEY_1 or KEY_2 in the file name
npx playwright test KEY_1 KEY_2

# Run the test with the title
npx playwright test -g "SOME_TITLE"

# Run tests in headed browsers
npx playwright test --headed

# Run tests in a particular configuration (project)
npx playwright test --project PROJECT
# Or contains multiple projects:
npx playwright test --project PROJECT1 PROJECT2

# Run in debug mode with Playwright Inspector
npx playwright test --debug

# Run only the tests that contains a tag:
npx playwright test --grep @YOUR_TAG
# Or contains multiple tag:
npx playwright test --grep "@TAG1|@TAG2"

# Or if you want the opposite, you can skip the tests with a certain tag:
npx playwright test --grep-invert @YOUR_TAG_SKIP
```

If you need help, you can execute:

```bash
npx playwright test --help
```

## Test Results

### Reporters

The easiest way to try out built-in reporters is to pass --reporter command line option.

```bash
# List reporter is default (except on CI where the dot reporter is default). It prints a line for each test being run.
npx playwright test --reporter=list
# Line reporter uses a single line to report last finished test, and prints failures when they occur.
npx playwright test --reporter=line
# HTML reporter produces a self-contained folder that contains report for the test run that can be served as a web page.
npx playwright test --reporter=html
# JSON reporter produces an object with all information about the test run and you need to set the PLAYWRIGHT_JSON_OUTPUT_NAME environment variable.
PLAYWRIGHT_JSON_OUTPUT_NAME=results.json npx playwright test --reporter=json
# JUnit reporter produces a JUnit-style xml report and you need to set the PLAYWRIGHT_JUNIT_OUTPUT_NAME environment variable.
PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml npx playwright test --reporter=junit
```

When you generate an HTML report, you can execute the command for reviewing it:

```bash
npx playwright show-report my-report
```

### Trace viewer

To see a trace zip file, specify the route of the trace:
`npx playwright show-trace test-results/TRACE_RESULT_DIR/trace.zip`

With this trace you can see:

- The list of actions Playwright performed on the left hand side. When you select an action you can see:
  - Action snapshots.
  - Action log.
  - Source code location.
  - Network log for this action in the properties pane.
  - Rendered DOM snapshots associated with each action.
- Screenshots: When tracing with the screenshots option turned on, each trace records screencast and renders it as a film strip and you can hover over it to see a magnified image
- Snapshots​ When tracing with the snapshots option turned on, Playwright captures a set of complete DOM snapshots for each action.

## Project Architecture Overview

- components: This directory houses all locators and web elements. To maintain organization, elements are grouped into sub-directories named after specific application features or functionalities. When adding a new component, create a new class within the appropriate directory and export it via the index.ts file.
- actions: Define the user interactions and workflows here, utilizing the locators defined in the components directory. Like the components, actions are categorized into sub-directories by functionality. Create a new class for new actions and ensure it is registered in the index.ts file.
- fixtures: This layer manages the instantiation of components and actions, allowing them to be injected directly into your tests. For every new component or action class created, you must add the corresponding instance to the respective fixture files.
- tests: This is the central repository for all executable test scripts. Tests are organized by type, such as End-to-End (E2E), UI, or Visual tests.
- utils: Use this directory for shared utility functions and helper methods that support test execution, such as generating random data, performing mathematical calculations, handling file management, and others.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Keep in mind we use Playwright as a base library, which forcing us to use await several times, we know promises can work too, but we use them for specific cases like expecting for some service requests or similar, but in an underlying way the framework is already doing that for us.

### Branching Model

1. Please create branches always from main branch and tied them to an specific Jira ticket, this is the way we can trace better about what your changes are about.
2. If the branch is related to a Feature for the framework always start with the Feature keyword, if it is Hotfix it will also start with Hotfix keyword
3. Every request requires two approvals, one should be from one member of the testing team.
4. Ondemand pipeline will be associated to each pull request to guarantee one successfull build before merge

An example of the current flow will be something like this:

- Create branch and do your changes

```bash
git checkout main
git checkout -b feature_branch
git add .
git commit -m "yourmessage"
git push
```

- Create the pull request and get reviews
- Fix comments and conflicts

```bash
git add .
git commit -m "fixingcomments"
```

- Merge and delete branch

```bash
git checkout main
git merge feature_branch
git branch -d feature_branch
```

### TypeScript Types

We're using TypeScript in our tests for better type checking and editor autocompletion.

Common types are defined in the `types.ts` file of the library or at the `interfaces` folder in the framework. These interfaces should be used whenever interacting with the API responses. When writing new tests or adding new endpoints, update the interfaces to reflect the new data structures.

### Metadata for test cases

- Fail tests: Please reference the JIRA issue related as a `test.info().annotations` and after add `test.fail()`
- Skip tests: Please reference a proper reason or ticket as a `test.info().annotations` and after add `test.skip()`
- Tags: Every test should have a unique reference that allows to execute the specific test from the terminal or the ondemand job, for instance: `@TC001`, `@smoke`. Keep in mind that all the test should have an ID reference nevertheless can belong to a specific suite as smoke, regression and so on.

## Execute analysis for the code style

You have to set some rules about the code style in the file `.prettierrc`, or you can use the default rules. From those rules, you can verify your code style executing:
`npm run prettier:check`
In this way you can see any error or warning. For fixing those errors and warnings that can be fixed autocally, you can execute:
`npm run prettier:write`.

## Abbreviations

### Definition of web elements names

| Web Element Type           | Prefix | Example          |
| -------------------------- | ------ | ---------------- |
| Animation button           | ani    | aniCart          |
| Button                     | btn    | btnAddToBag      |
| Check box                  | chk    | chkSize          |
| Chevron                    | chv    | chvProtocol      |
| Combo box                  | cbo    | cboEnglish       |
| Common dialog              | dlg    | dlgFileOpen      |
| Data grid                  | dgd    | dgdTitles        |
| Data List                  | dbl    | dblPublisher     |
| Date picker                | dtp    | dtpPublished     |
| Directory list box         | dir    | dirSource        |
| Drive list box             | drv    | drvTarget        |
| Dropdown List / Select tag | ddl    | ddlDay           |
| File list box              | fil    | filSource        |
| Footer                     | fot    | fotPage          |
| Form                       | frm    | frmLogin         |
| Frame                      | fra    | fraLanguage      |
| Gauge                      | gau    | gauBattery       |
| Graph                      | gra    | graPurchases     |
| Group push button          | gpb    | gpbMovements     |
| Grid                       | grd    | grdMode          |
| Header                     | hdr    | hdrFilter        |
| Horizontal scroll bar      | hsb    | hsbDetails       |
| Image                      | img    | imgProfile       |
| Image List                 | iml    | imlProducts      |
| Label                      | lbl    | lblColors        |
| Line                       | lin    | linSeparator     |
| Links / Anchor tags        | lnk    | lnkForgotPwd     |
| List box                   | lst    | lstPolicyCodes   |
| List View                  | lvw    | lvwProducts      |
| Menu                       | mnu    | mnuFileOpen      |
| Messages                   | msg    | msgError         |
| Paginator                  | pag    | pgrFilter        |
| Panel / Filed set          | pnl    | pnlGroup         |
| Picture                    | pic    | picLogo          |
| Picture clip               | clp    | clpProducts      |
| ProgressBar                | prg    | prgLoadFile      |
| Radio button / group       | rdo    | rdoGender        |
| RichTextBox                | rtf    | rtfReport        |
| Shape                      | shp    | shpLogo          |
| Slider                     | sld    | sldScale         |
| Spinner                    | spn    | spnPages         |
| StatusBar                  | sbr    | staDateTime      |
| Table                      | tbl    | tblSizes         |
| TabStrip                   | tab    | tabOptions       |
| Text Area                  | txa    | txaDescription   |
| Text box                   | txt    | txtPassword      |
| Thumbnail                  | thb    | thbProductImages |
| Timer                      | tmr    | tmrAlarm         |
| Toolbar                    | tlb    | tlbActions       |
| TreeView                   | tre    | treOrganization  |
| Vertical scroll bar        | vsb    | vsbProducts      |
| 3D Panel                   | pnl    | pnlProduct       |

### Definition of actions names

| Action            | Prefix | Example        |
| ----------------- | ------ | -------------- |
| Click             | clk    | clkSigin       |
| Get a value       | get    | getAllProducts |
| Go to a page      | goTo   | goToHomePage   |
| Select value from | select | selectYear     |
| Type              | set    | setEmail       |

### Naming conventions with data type

| Data Type     | Prefix | Example         |
| ------------- | ------ | --------------- |
| Boolean       | bln    | blnStatus       |
| Date and time | dtm    | dtmFrom         |
| Error         | err    | errInitBrowsers |
| Long          | lng    | lngDistance     |
| Integer       | int    | intCount        |
| String        | str    | strEmployeeName |
| Number        | num    | numProducts     |

### Use of TAGS

| Test   | Tag                                                    | Description                                                                                                                                                                                                                                                 | Example                                                                                                                                                                             |
| ------ | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API    | `test.describe`: <br> `@NAME_SERVICE-service @FEATURE` | For the API test we should add two tags in the `test.describe` in order to identify the service that implements that API and also the feature that we are covering with this test                                                                           | `@my-service @my-endpoint`, the first one identifies the service that contain that specific endpoint, and the last one identifies that this endpoint implements a feature.          |
| E2E    | `test.describe`: <br> `@E2E-##`                        | For the E2E test we should add one tag in the `test.describe` in order to identify the number of the E2E test that we want to execute.                                                                                                                      | `E2E-01`                                                                                                                                                                            |
| UI     | `test.describe`: <br> `@FEATURE`                       | For the UI test we should add one tag in the `test.describe` in order to identify the page or feature, also we should add one tag in the `test` in order to identify the number of the test that we want to execute for this specific feature `@FEATURE-##` | `@login` in the test.describe that allows as to identify that this test set is related with the login page, `@login-01` in the test identifies an specific test for the login page. |
| VISUAL | `@VT-##`                                               | For the VISUAL test we should add one tag in the `test` in order to identify the number of the VISUAL test that we want to execute.                                                                                                                         | `@VT-01`                                                                                                                                                                            |
| SMOKE  | `@smoke`                                               | For the SMOKE test we should add the tag `@smoke`                                                                                                                                                                                                           | -                                                                                                                                                                                   |

## API Testing

We're using the Playwright Test runner for both UI and API tests. API tests are designed to test the functionality of our API endpoints and validate response data and HTTP status codes.

API tests are organized by endpoint, with each endpoint having its own `describe` block. Within these, tests are written to check for various aspects of the response like status code, headers, and body.

When writing new API tests, please follow the existing structure. Include setup and teardown steps within `beforeEach` and `afterEach` blocks, if needed.

## Visual Testing

### Update snapshots

When you need to update the snapshots related with your Visual Tests, you should execute in the command line:

```
npx playwright test tests/visual/ --config=playwright.config.ts --update-snapshots
```

The images are update taking into account the machine where the command is executed, so if you need to update the images for a linux machine first of all you should run the image for this machine:

```
docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v${PLAYWRIGHT_VERSION}-focal /bin/bash
```

And later, inside the machine execute the previous command.

### Element masking

Some tests contain data that may include sensible information or dynamic images that may change over the course of the visual tests.

You can specify a 'mask' (an image that is superimposed on top of the elements when doing the comparison), then you could block that part of the image for the comparison to match, since that area would be the same (or ignored).

For this you can use the option given by playwright in v1.20.0 to mask the data you want to block:

mask: Locator[]

This is a small example:

```typescript:
await page.screenshot({
   mask: [
    page.locator('.my-date-element'),
  ],
});
```

This option masks given elements, overlaying them with pink #FF00FF boxes.