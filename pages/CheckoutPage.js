import BasePage from "./BasePage";

export default class CheckoutPage extends BasePage {

    constructor(page) {
        super(page);

        // Customer Information
        this.firstName = '#first-name';
        this.lastName = '#last-name';
        this.postalCode = '#postal-code';

        // Buttons
        this.continueBtn = '#continue';
        this.finishBtn = '#finish';
        this.cancelBtn = '#cancel';

        // Success Message
        this.completeHeader = '.complete-header';
    }

    async enterCustomerDetails(firstName, lastName, postalCode) {

        await this.fill(this.firstName, firstName);

        await this.fill(this.lastName, lastName);

        await this.fill(this.postalCode, postalCode);

    }

    async continueCheckout() {

        await this.click(this.continueBtn);

    }

    async finishCheckout() {

        await this.click(this.finishBtn);

    }

    async cancelCheckout() {

        await this.click(this.cancelBtn);

    }

    async getSuccessMessage() {

        return await this.getText(this.completeHeader);

    }

}