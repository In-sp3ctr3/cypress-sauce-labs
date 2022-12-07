const ProductsPage = require("../page/products.page");
const LoginPage = require("../page/login.page");
const LoginData = require("../testData/login.data");
const CartPage = require("../page/cart.page");

describe("Add to Cart", () => {
    beforeEach(() => {
        cy.visit("/");
        LoginPage.login(LoginData.validUser.username, LoginData.validUser.password);
    });
    
    it("should add a single product to cart", () => {
        ProductsPage.addProductToCart("Sauce Labs Backpack");
    
        ProductsPage.cartBadge.should("be.visible");
        ProductsPage.cartBadge.should("have.text", "1");

        ProductsPage.cartBadge.click();

        CartPage.cartItems.should("have.length", 1);
        CartPage.cartItems.should("contain", "Sauce Labs Backpack");
    });
    
    it("should add all products to cart", () => {
        ProductsPage.addAllProductsToCart();
    
        ProductsPage.cartBadge.should("be.visible");
        ProductsPage.cartBadge.should("have.text", "6");

        ProductsPage.cartBadge.click();

        CartPage.cartItems.should("have.length", 6);

        CartPage.cartItems.each((cartItem) => {
            cy.wrap(cartItem).should("be.visible");

            let productName = cartItem.find(".inventory_item_name").text();
            ProductsPage.productNames.should("contain", productName);
        }
        );
    });

});
