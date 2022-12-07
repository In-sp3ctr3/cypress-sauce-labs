class CartPage {
    
    get cartBadge() {
        return cy.get(".shopping_cart_badge");
    }
    get cartItems() {
        return cy.get(".cart_item");
    }
    get cartItemNames() {
        return cy.get(".cart_item_label");
    }
    get cartItemPrices() {
        return cy.get(".cart_item_price");
    }
    get cartItemQuantities() {
        return cy.get(".cart_quantity");
    }
    get cartItemRemoveButtons() {
        return cy.get(".cart_button");
    }
    get checkoutButton() {
        return cy.get(".checkout_button");
    }
    get continueShoppingButton() {
        return cy.get(".btn_secondary");
    }
    get cartTotal() {
        return cy.get(".summary_subtotal_label");
    }
    get tax() {
        return cy.get(".summary_tax_label");
    }
    get total() {
        return cy.get(".summary_total_label");
    }

    get thankYouMessage() {
        return cy.get(".complete-header");
    }

    get finishButton() {
        return cy.get(".btn_action.cart_button");
    }

    removeProductFromCart(productName) {
        let formattedProductName = productName.replace(/ /g, "-").toLowerCase();
        cy.get(`[data-test=remove-${formattedProductName}]`).click();
    }

    removeAllProductsFromCart() {
        this.cartItemRemoveButtons.each((cartItemRemoveButton) => {
            cy.wrap(cartItemRemoveButton).click();
        });
    }

    checkout() {
        this.checkoutButton.click();
    }

    continueShopping() {
        this.continueShoppingButton.click();
    }

}
module.exports = new CartPage();