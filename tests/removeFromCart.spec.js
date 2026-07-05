import { test, expect } from '@playwright/test';

import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

test.describe('Remove Product Tests', () => {

    test('Verify user can remove product from cart', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);

        await page.goto('https://www.saucedemo.com');

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        // Add Backpack
        await inventoryPage.addBackpackToCart();

        expect(
            await inventoryPage.getCartBadgeCount()
        ).toBe('1');

        // Open Cart
        await inventoryPage.openCart();

        // Remove Backpack
        await cartPage.removeBackpack();

        // Verify cart is empty
        expect(
            await cartPage.isCartEmpty()
        ).toBeTruthy();

        // Verify badge disappears
        await expect(
            page.locator('.shopping_cart_badge')
        ).toHaveCount(0);

    });

});