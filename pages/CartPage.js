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

    async checkout() {
        await this.click(this.checkoutButton);
    }

    async continueShopping() {
        await this.click(this.continueShoppingButton);
    }

    async removeBackpack() {
        await this.click(this.removeBackpackButton);
    }

    async getCartItemCount() {
        return await this.page.locator(this.cartItems).count();
    }

    async getProductNames() {
        return await this.page.locator(this.productNames).allTextContents();
    }

}