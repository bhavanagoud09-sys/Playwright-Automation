import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test.describe('Invalid Login', () => {

    test('Verify error message for invalid credentials', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await page.goto('https://www.saucedemo.com');

        await loginPage.login(
            'invalid_user',
            'invalid_password'
        );

        await expect(
            page.locator('.error-message-container')
        ).toContainText(
            'Username and password do not match'
        );

    });

});