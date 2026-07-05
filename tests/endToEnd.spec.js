import { test, expect } from '@playwright/test';

import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import MenuPage from '../pages/MenuPage';

test.describe('End To End Tests', () => {

    test('Verify complete purchase flow', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const menuPage = new MenuPage(page);

        // Open Application
        await page.goto('https://www.saucedemo.com');

        // Login
        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        // Verify Inventory Page
        await expect(page).toHaveURL(/inventory/);

        // Sort Products
        await inventoryPage.sortLowToHigh();

        // Add Product
        await inventoryPage.addBackpackToCart();

        // Verify Cart Badge
        expect(
            await inventoryPage.getCartBadgeCount()
        ).toBe('1');

        // Open Cart
        await inventoryPage.openCart();

        // Verify Cart
        expect(
            await cartPage.getCartItemCount()
        ).toBe(1);

        const products = await cartPage.getProductNames();

        expect(products).toContain('Sauce Labs Backpack');

        // Checkout
        await cartPage.checkout();

        // Customer Information
        await checkoutPage.enterCustomerDetails(
            'Umesh',
            'Goud',
            '500081'
        );

        // Continue
        await checkoutPage.continueCheckout();

        // Finish
        await checkoutPage.finishCheckout();

        // Verify Success Message
        expect(
            await checkoutPage.getSuccessMessage()
        ).toBe('Thank you for your order!');

        // Logout
        await menuPage.openMenu();

        await menuPage.logout();

        // Verify Login Page
        await expect(page).toHaveURL('https://www.saucedemo.com/');

        await expect(
            loginPage.getLoginButton()
        ).toBeVisible();

    });

});