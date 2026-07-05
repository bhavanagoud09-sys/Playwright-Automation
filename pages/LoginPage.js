import BasePage from "./BasePage";

export default class LoginPage extends BasePage {

    constructor(page) {
        super(page);

        this.username = '#user-name';
        this.password = '#password';
        this.loginBtn = '#login-button';
    }

    async login(username, password) {

        await this.fill(this.username, username);

        await this.fill(this.password, password);

        await this.click(this.loginBtn);

    }

}