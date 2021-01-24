describe("<RegisterForm/> e2e", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/signUp");
    });
    describe("Fields validation", () => {
        describe("Email field validation", () => {
            it("should validate email field", function () {
                const emailInput = cy.get("input[name=email");
                emailInput.type("invalid@invalid");
                cy.get("small").should("contain", "Invalid email!");
            });

            it("should validate empty email field on blur", function () {
                cy.get("input[name=email").focus().blur();
                cy.get("small").should("contain", "Email is required!");
            });
        });
        describe("Password field validation", () => {
            it("should validate password min value", function () {
                const passInput = cy.get("input[name=password");
                passInput.type("12");
                cy.get("small").should("contain", "Password should be 4 chars min!");
            });

            it("should validate empty password field on blur", function () {
                cy.get("input[name=password").focus().blur();
                cy.get("small").should("contain", "Password is required!");
            });
        });
        describe("Repeat Password field validation", () => {
            it("should validate on empty password", function () {
                const passInput = cy.get("input[name=repeatPassword");
                passInput.type("12");
                cy.get("small").should("contain", "Passwords must match!");
            });

            it("should validate empty password field on blur", function () {
                cy.get("input[name=repeatPassword").focus().blur();
                cy.get("small").should("contain", "Password is required");
            });
            it("should validate password and repeat password", function () {
                const passInput = cy.get("input[name=password");
                passInput.type("1234");
                const repeatPassInput = cy.get("input[name=repeatPassword");
                repeatPassInput.type("1233");
                cy.get("input[name=repeatPassword").focus().blur();
                cy.get("small").should("contain", "Passwords must match!");
            });
        });
    });

    describe("Button validation", () => {
        it("should be disabled on init", function () {
            cy.get("button").should("be.disabled");
        });
        it("should be enabled on valid input", function () {
            const emailInput = cy.get("input[name=email");
            emailInput.type("i@am.valid");
            const passwordInput = cy.get("input[name=password");
            passwordInput.type("superValidPass");
            const repeatPasswordInput = cy.get("input[name=repeatPassword");
            repeatPasswordInput.type("superValidPass");
            cy.get("button").should("be.enabled");
        });
        it("should spinner be enabled on submit", function () {
            const emailInput = cy.get("input[name=email");
            emailInput.type("i@am.valid");
            const passwordInput = cy.get("input[name=password");
            passwordInput.type("superValidPass");
            const repeatPasswordInput = cy.get("input[name=repeatPassword");
            repeatPasswordInput.type("superValidPass");
            const btn = cy.get("button");
            btn.click();
            cy.get("span").should("have.class", "spinner-border");
        });
    });
});
