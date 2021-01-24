describe("Authentication", ()=>{
    it("anonymous should redirect to login", function () {
        cy.clearLocalStorage();
        cy.visit("http://localhost:3000");

        cy.url().should("include","login");
    });

    it("homepage should be visited by authorized users", function () {
        cy.login();
        cy.visit("http://localhost:3000");

        cy.url().should("include","/");
        cy.clearLocalStorage();
    });

    it("login page cannot be assessed by authorized users", function () {
        cy.login();
        cy.visit("http://localhost:3000/login");

        cy.url().should("include","/");
        cy.clearLocalStorage();
    });

    it("should signUp cannot be assessed by authorized users", function () {
        cy.login();
        cy.visit("http://localhost:3000/signUp");

        cy.url().should("include","/");
        cy.clearLocalStorage();
    });
});
