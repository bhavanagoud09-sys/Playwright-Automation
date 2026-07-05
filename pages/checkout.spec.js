import { test, expect } from '@playwright/test';

import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

test.describe('Checkout Tests', () => {

    test('Verify user can complete checkout successfully', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        // Open Application
        await page.goto('https://www.saucedemo.com');

        // Login
        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        // Add Product
        await inventoryPage.addBackpackToCart();

        // Verify Cart Badge
        expect(
            await inventoryPage.getCartBadgeCount()
        ).toBe('1');

        // Open Cart
        await inventoryPage.openCart();

        // Verify Product Exists
        expect(
            await cartPage.getCartItemCount()
        ).toBe(1);

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

        // Finish Order
        await checkoutPage.finishCheckout();

        // Verify Success Message
        expect(
            await checkoutPage.getSuccessMessage()
        ).toBe('Thank you for your order!');

    });

});