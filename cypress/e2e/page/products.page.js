class ProductsPage {
    
    // selectors
    get products() { return cy.get(".inventory_item"); }
    get productNames() { return cy.get(".inventory_item_name"); }
    get productPrices() { return cy.get(".inventory_item_price"); }
    get addToCartButtons() { return cy.get(".btn_inventory"); }
    get cartBadge() { return cy.get(".shopping_cart_badge"); }
    get removeButtons() { return cy.get(".btn_secondary"); }

    // function to add a single product to cart
    addProductToCart(productName) {
        let formattedProductName = productName.replace(/ /g, "-").toLowerCase();
        cy.get(`[data-test=add-to-cart-${formattedProductName}]`).click();

    }

    // function to add all products to cart 
    addAllProductsToCart() {
        this.addToCartButtons.each((addToCartButton) => {
            cy.wrap(addToCartButton).click();
        });
    }

    addRandomProductToCart() {
        this.addToCartButtons.then((addToCartButtons) => {
            let randomIndex = Math.floor(Math.random() * addToCartButtons.length);
            cy.wrap(addToCartButtons[randomIndex]).click();
        });
    }

    removeAllProductsFromCart() {
        this.removeButtons.each((removeButton) => {
            cy.wrap(removeButton).click();
        });
    }

    removeProductFromCart(productName) {
        let formattedProductName = productName.replace(/ /g, "-").toLowerCase();
        cy.get(`[data-test=remove-${formattedProductName}]`).click();
    }

    sortProductsByName() {
        cy.get(".product_sort_container").select("az");
    }
    
    sortProductsByPrice() {
        cy.get(".product_sort_container").select("lohi");
    }

}

module.exports = new ProductsPage();