import { test, expect } from '@playwright/test';

import LoginPage from '../pages/LoginPage';
import MenuPage from '../pages/MenuPage';

test.describe('Logout Tests', () => {

    test('Verify user can logout successfully', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const menuPage = new MenuPage(page);

        // Open Application
        await page.goto('https://www.saucedemo.com');

        // Login
        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        // Open Menu
        await menuPage.openMenu();

        // Logout
        await menuPage.logout();

        // Verify Login Page
        await expect(page).toHaveURL('https://www.saucedemo.com/');

        // Verify Login Button is Visible
        await expect(page.locator('#login-button')).toBeVisible();

    });

});import { test, expect } from '@playwright/test';

import LoginPage from '../pages/LoginPage';
import MenuPage from '../pages/MenuPage';

test.describe('Logout Tests', () => {

    test('Verify user can logout successfully', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const menuPage = new MenuPage(page);

        // Open Application
        await page.goto('https://www.saucedemo.com');

        // Login
        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        // Open Menu
        await menuPage.openMenu();

        // Logout
        await menuPage.logout();

        // Verify Login Page
        await expect(page).toHaveURL('https://www.saucedemo.com/');

        // Verify Login Button is Visible
        await expect(page.locator('#login-button')).toBeVisible();

    });

});