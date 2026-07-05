import BasePage from "./BasePage";

export default class InventoryPage extends BasePage {

    constructor(page) {
        super(page);

        // Product Buttons
        this.backpack = '#add-to-cart-sauce-labs-backpack';
        this.bikeLight = '#add-to-cart-sauce-labs-bike-light';

        // Remove Buttons
        this.removeBackpack = '#remove-sauce-labs-backpack';
        this.removeBikeLight = '#remove-sauce-labs-bike-light';

        // Shopping Cart
        this.cartIcon = '.shopping_cart_link';
        this.cartBadge = '.shopping_cart_badge';

        // Product Sorting
        this.sortDropdown = '.product_sort_container';

        // Inventory
        this.inventoryItems = '.inventory_item';

        // Product Prices
        this.productPrices = '.inventory_item_price';

        // Product Names
        this.productNames = '.inventory_item_name';
    }

    // ==========================
    // Add Products
    // ==========================

    async addBackpackToCart() {
        await this.click(this.backpack);
    }

    async addBikeLightToCart() {
        await this.click(this.bikeLight);
    }

    // ==========================
    // Remove Products
    // ==========================

    async removeBackpackFromCart() {
        await this.click(this.removeBackpack);
    }

    async removeBikeLightFromCart() {
        await this.click(this.removeBikeLight);
    }

    // ==========================
    // Cart
    // ==========================

    async openCart() {
        await this.click(this.cartIcon);
    }

    async getCartBadgeCount() {
        return await this.getText(this.cartBadge);
    }

    // ==========================
    // Product Sorting
    // ==========================

    async sortLowToHigh() {
        await this.page.locator(this.sortDropdown).selectOption('lohi');
    }

    async sortHighToLow() {
        await this.page.locator(this.sortDropdown).selectOption('hilo');
    }

    async sortAToZ() {
        await this.page.locator(this.sortDropdown).selectOption('az');
    }

    async sortZToA() {
        await this.page.locator(this.sortDropdown).selectOption('za');
    }

    // ==========================
    // Product Count
    // ==========================

    async getProductCount() {
        return await this.page.locator(this.inventoryItems).count();
    }

    // ==========================
    // Product Prices
    // ==========================

    async getAllProductPrices() {

        const prices = await this.page
            .locator(this.productPrices)
            .allTextContents();

        return prices.map(price =>
            Number(price.replace('$', ''))
        );
    }

    // ==========================
    // Product Names
    // ==========================

    async getAllProductNames() {

        return await this.page
            .locator(this.productNames)
            .allTextContents();
    }

}