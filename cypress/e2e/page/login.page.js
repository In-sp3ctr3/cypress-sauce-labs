class LoginPage{

    get username() { return cy.get("#user-name"); }
    get password() { return cy.get("#password"); }
    get submit() { return cy.get("#login-button"); }

    login(username, password) {
        this.username.type(username);
        this.password.type(password);
        this.submit.click();
    }

    logout() {
        cy.get(".bm-burger-button").click();
        cy.get("#logout_sidebar_link").click();
    }
    
}

module.exports = new LoginPage();