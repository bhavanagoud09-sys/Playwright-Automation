import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

test.describe('Inventory Tests', () => {

    test('Verify products are sorted by price (Low to High)', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await page.goto('https://www.saucedemo.com');

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await inventoryPage.sortLowToHigh();

        const actualPrices = await inventoryPage.getAllProductPrices();

        const expectedPrices = [...actualPrices].sort((a, b) => a - b);

        expect(actualPrices).toEqual(expectedPrices);

    });

});