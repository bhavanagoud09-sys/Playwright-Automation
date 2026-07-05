import BasePage from "./BasePage";

export default class CartPage extends BasePage {

    constructor(page) {
        super(page);

        // Buttons
        this.checkoutButton = '#checkout';
        this.continueShoppingButton = '#continue-shopping';

        // Remove Buttons
        this.removeBackpackButton = '#remove-sauce-labs-backpack';

        // Cart Items
        this.cartItems = '.cart_item';

        // Product Name
        this.productNames = '.inventory_item_name';
    }

    // ==========================
    // Checkout
    // ==========================

    async checkout() {
        await this.click(this.checkoutButton);
    }

    // ==========================
    // Continue Shopping
    // ==========================

    async continueShopping() {
        await this.click(this.continueShoppingButton);
    }

    // ==========================
    // Remove Product
    // ==========================

    async removeBackpack() {
        await this.click(this.removeBackpackButton);
    }

    // ==========================
    // Cart Item Count
    // ==========================

    async getCartItemCount() {
        return await this.page.locator(this.cartItems).count();
    }

    // ==========================
    // Product Names
    // ==========================

    async getProductNames() {
        return await this.page.locator(this.productNames).allTextContents();
    }

    // ==========================
    // Check if Cart is Empty
    // ==========================

    async isCartEmpty() {
        return (await this.page.locator(this.cartItems).count()) === 0;
    }

}