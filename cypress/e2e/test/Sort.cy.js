const ProductsPage = require("../page/products.page");
const LoginPage = require("../page/login.page");
const LoginData = require("../testData/login.data");

describe("Sort", () => {
    beforeEach(() => {
        cy.visit("/");
        LoginPage.login(LoginData.validUser.username, LoginData.validUser.password);
    });
    
    it("should sort products by name", () => {
        ProductsPage.sortProductsByName();
        ProductsPage.productNames.should("have.length", 6);
        ProductsPage.productNames.should("be.ordered", "asc");
    });
    
    it("should sort products by price", () => {
        ProductsPage.sortProductsByPrice();
        ProductsPage.productNames.should("have.length", 6);
        ProductsPage.productPrices.should("be.ordered", "asc");
    });

    it ("should sort products by name in descending order", () => {
        ProductsPage.sortProductsByName();
        ProductsPage.sortProductsByName();
        ProductsPage.productNames.should("have.length", 6);
        ProductsPage.productNames.should("be.ordered", "desc");
    }
    );
});
