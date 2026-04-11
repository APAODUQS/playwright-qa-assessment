import { Locator, Page } from "@playwright/test";

export class HeaderComponent {
  readonly header: Page;
  readonly headerContainer: Locator;
  readonly btnMenu: Locator;
  readonly btnCart: Locator;
  readonly allItemsOptions: Locator;
  readonly aboutOptions: Locator;
  readonly logoutOptions: Locator;
  readonly resetAppStateOptions: Locator;

  constructor(header: Page) {
    this.header = header;
    this.headerContainer = header.getByTestId("header-container");
    this.btnMenu = header.locator('[id="react-burger-menu-btn"]');
    this.btnCart = header.getByTestId("shopping-cart-link");
    this.allItemsOptions = header.getByTestId("inventory-sidebar-link");
    this.aboutOptions = header.getByTestId("about-sidebar-link");
    this.logoutOptions = header.getByTestId("logout-sidebar-link");
    this.resetAppStateOptions = header.getByTestId("reset-sidebar-link");
  }
}
