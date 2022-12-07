const LoginPage = require('../page/login.page');
const LoginData = require('../testData/login.data');
const ProductsPage = require('../page/products.page');
const CartPage = require('../page/cart.page');
const CheckoutData = require('../testData/checkout.data');
const CheckoutPage = require('../page/checkout.page');

describe('Checkout', () => {
    beforeEach(() => {
        cy.visit('/');
        LoginPage.login(LoginData.validUser.username, LoginData.validUser.password);
    });

    it('should checkout with an item', () => {
        ProductsPage.addProductToCart('Sauce Labs Backpack');
        ProductsPage.cartBadge.click();
        CartPage.checkoutButton.click();
        CheckoutPage.firstName.type(CheckoutData.validUser.firstName);
        CheckoutPage.lastName.type(CheckoutData.validUser.lastName);
        CheckoutPage.postalCode.type(CheckoutData.validUser.postalCode);
        CheckoutPage.continueButton.click();

        CheckoutPage.productName.should('be.visible');
        CheckoutPage.productName.should('have.text', 'Sauce Labs Backpack');
        CheckoutPage.productPrice.should('be.visible');
        CheckoutPage.productPrice.should('contain', '$29.99');

        CheckoutPage.tax.should('be.visible');
        CheckoutPage.tax.should('contain', 'Tax: $2.40');
        CheckoutPage.total.should('be.visible');
        CheckoutPage.total.should('contain', '$32.39');

        CheckoutPage.finishButton.click();
        CheckoutPage.successMessage.should('be.visible');
        CheckoutPage.successMessage.should('have.text', 'THANK YOU FOR YOUR ORDER');
    });
    
    it('should not checkout with missing information', () => {
        ProductsPage.addProductToCart('Sauce Labs Backpack');
        ProductsPage.cartBadge.click();
        CartPage.checkoutButton.click();
        CheckoutPage.continueButton.click();
        CheckoutPage.errorMessage.should('be.visible');
        CheckoutPage.errorMessage.should('have.text', 'Error: First Name is required');
    });

    it('should not checkout with invalid information', () => {
        ProductsPage.addProductToCart('Sauce Labs Backpack');
        ProductsPage.cartBadge.click();
        CartPage.checkoutButton.click();
        CheckoutPage.firstName.type(CheckoutData.invalidUser.firstName);
        CheckoutPage.lastName.type(CheckoutData.invalidUser.lastName);
        CheckoutPage.continueButton.click();
        CheckoutPage.errorMessage.should('be.visible');
        CheckoutPage.errorMessage.should('have.text', 'Error: Postal Code is required');
    });

});