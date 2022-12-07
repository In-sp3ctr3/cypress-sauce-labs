const LoginPage = require("../page/login.page");
const LoginData = require("../testData/login.data");

describe("Sort", () => {
    beforeEach(() => {
        cy.visit("/");
        LoginPage.login(LoginData.validUser.username, LoginData.validUser.password);
    });
    
    it('should sort product list from A-Z', () => {
        cy.get('.product_sort_container').select('az')

        var productList = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
        productList.sort()

        cy.get('.inventory_item_name').each(($elem, index) => {
            expect($elem.text()).equal(productList[index])
        })
    })

    it('should sort product list from Z-A', () => {
        cy.get('.product_sort_container').select('za')

        var productList = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
        productList.sort().reverse()

        cy.get('.inventory_item_name').each(($elem, index) => {
            expect($elem.text()).equal(productList[index])
        })
    })

    it('should sort product list from low to high', () => {
        cy.get('.product_sort_container').select('lohi')

        var productList = [['Sauce Labs Backpack', 29.99], ['Sauce Labs Bike Light', 9.99], ['Sauce Labs Bolt T-Shirt', 15.99], ['Sauce Labs Fleece Jacket', 49.99], ['Sauce Labs Onesie', 7.99], ['Test.allTheThings() T-Shirt (Red)', 15.99]]
        productList.sort(function(a, b) {
            return a[1] - b[1]
        }
        )

        cy.get('.inventory_item_name').each(($elem, index) => {
            expect($elem.text()).equal(productList[index][0])
        }
        )
    })

    it('should sort product list from high to low', () => {
        cy.get('.product_sort_container').select('hilo')

        var productList = [['Sauce Labs Backpack', 29.99], ['Sauce Labs Bike Light', 9.99], ['Sauce Labs Bolt T-Shirt', 15.99], ['Sauce Labs Fleece Jacket', 49.99], ['Sauce Labs Onesie', 7.99], ['Test.allTheThings() T-Shirt (Red)', 15.99]]
        productList.sort(function(a, b) {
            return b[1] - a[1]
        })

        cy.get('.inventory_item_name').each(($elem, index) => {
            expect($elem.text()).equal(productList[index][0])
        })
    })
});
