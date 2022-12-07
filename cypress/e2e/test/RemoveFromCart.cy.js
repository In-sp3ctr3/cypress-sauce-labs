const ProductsPage = require("../page/products.page");
const LoginPage = require("../page/login.page");
const LoginData = require("../testData/login.data");
const CartPage = require("../page/cart.page");

describe("Remove from cart", () => {
    beforeEach(() => {
        cy.visit("/");
        LoginPage.login(LoginData.validUser.username, LoginData.validUser.password);
    });
    
    it("should remove item from cart", () => {
        ProductsPage.addProductToCart("Sauce Labs Backpack");
        ProductsPage.cartBadge.click();
        CartPage.cartItems.should("have.length", 1);
        
        CartPage.removeProductFromCart("Sauce Labs Backpack");
        CartPage.cartItems.should("have.length", 0);
    });

    it("should remove all items from cart", () => {
        ProductsPage.addProductToCart("Sauce Labs Backpack");
        ProductsPage.addProductToCart("Sauce Labs Bike Light");
        ProductsPage.addProductToCart("Sauce Labs Bolt T-Shirt");
        ProductsPage.addProductToCart("Sauce Labs Fleece Jacket");
        ProductsPage.addProductToCart("Sauce Labs Onesie");
        ProductsPage.cartBadge.click();
        CartPage.cartItems.should("have.length", 5);
        
        CartPage.removeAllProductsFromCart();
        CartPage.cartItems.should("have.length", 0);
    }
    );

    it("should remove product from cart on products page", () => {
        ProductsPage.addProductToCart("Sauce Labs Backpack");
        ProductsPage.removeProductFromCart("Sauce Labs Backpack");
        CartPage.cartItems.should("have.length", 0);

    });

});