import { browsersFixture as baseTest } from './browsers.fixture'
import {
  LoginComponent,
} from '../components/index'

export type ComponentsFixture = {
  loginComponent: LoginComponent
}

const base = baseTest.extend<ComponentsFixture>({
  loginComponent: async ({ page }, use) => {
    const loginComponent = new LoginComponent(page)
    await use(loginComponent)
  },
})

export const componentFixture = base
export { expect } from '@playwright/test'
