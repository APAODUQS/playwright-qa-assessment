import { Locator, Page } from "@playwright/test";

export class HeaderComponent {
  readonly header: Page;
  readonly headerContainer: Locator;
  readonly btnMenu: Locator;
  readonly btnCart: Locator;

  constructor(header: Page) {
    this.header = header;
    this.headerContainer = header.getByTestId("header-container");
    this.btnMenu = header.locator('[id="react-burger-menu-btn"]');
    this.btnCart = header.getByTestId("shopping-cart-link");
  }
}
