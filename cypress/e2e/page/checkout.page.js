class CheckoutPage {

    get checkoutButton() {
        return cy.get('.checkout-button');
    }

    get firstName() {
        return cy.get('#first-name');
    }

    get lastName() {
        return cy.get('#last-name');
    }

    get postalCode() {
        return cy.get('#postal-code');
    }

    get continueButton() {
        return cy.get('.btn_primary.cart_button');
    }

    get finishButton() {
        return cy.get('.btn_action.cart_button');
    }

    get cancelButton() {
        return cy.get('.cart_cancel_link.btn_secondary');
    }

    get items() {
        return cy.get('.cart_item');
    }

    get productNames() {
        return cy.get('.inventory_item_name');
    }

    get itemPrices() {
        return cy.get('.inventory_item_price');
    }

    get itemTotal() {
        return cy.get('.summary_subtotal_label');
    }

    get tax() {
        return cy.get('.summary_tax_label');
    }

    get total() {
        return cy.get('.summary_total_label');
    }

    get successMessage() {
        return cy.get('.complete-header');
    }

    get errorMessage() {
        return cy.get('.error-message-container.error');
    }

    get productName() {
        return cy.get('.inventory_item_name');
    }

    get productPrice() {
        return cy.get('.inventory_item_price');
    }



}

module.exports = new CheckoutPage();