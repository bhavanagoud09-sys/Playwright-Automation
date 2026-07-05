import { test, expect } from '@playwright/test';

import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

test.describe('Cart Tests', () => {

    test('Verify user can add Backpack to cart', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);

        await page.goto('https://www.saucedemo.com');

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await inventoryPage.addBackpackToCart();

        // Verify cart badge
        expect(
            await inventoryPage.getCartBadgeCount()
        ).toBe('1');

        // Open Cart
        await inventoryPage.openCart();

        // Verify product count
        expect(
            await cartPage.getCartItemCount()
        ).toBe(1);

        // Verify product name
        const products = await cartPage.getProductNames();

        expect(products).toContain('Sauce Labs Backpack');

    });

});