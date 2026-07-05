import BasePage from "./BasePage";

export default class MenuPage extends BasePage {

    constructor(page) {
        super(page);

        // Menu
        this.menuButton = '#react-burger-menu-btn';

        // Menu Options
        this.logoutLink = '#logout_sidebar_link';
        this.resetAppState = '#reset_sidebar_link';
        this.aboutLink = '#about_sidebar_link';

        // Close Menu
        this.closeMenu = '#react-burger-cross-btn';
    }

    async openMenu() {

        await this.click(this.menuButton);

    }

    async logout() {

        await this.click(this.logoutLink);

    }

    async resetApplication() {

        await this.click(this.resetAppState);

    }

    async openAbout() {

        await this.click(this.aboutLink);

    }

    async closeSidebar() {

        await this.click(this.closeMenu);

    }

}