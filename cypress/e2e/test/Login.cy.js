const LoginPage = require('../page/login.page');
const LoginData = require('../testData/login.data');

describe('Login', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('should not login with invalid credentials', () => {
        LoginPage.login(LoginData.invalidUser.username, LoginData.invalidUser.password);

        cy.get('.error-message-container').should('be.visible');
        cy.get('.error-message-container').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });

    it('should login with valid credentials', () => {
        LoginPage.login(LoginData.validUser.username, LoginData.validUser.password);
    });

});