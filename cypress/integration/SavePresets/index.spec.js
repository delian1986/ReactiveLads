describe("<SavePresets/> e2e", () => {
    beforeEach(() => {
        cy.login();
        cy.visit("http://localhost:3000/");
    });

    afterEach(()=>{
        cy.clearLocalStorage();
    });

    it("<SavePresets/> should be loaded", function () {
        cy.get("h5").first().should("contain", "SavePresets");
    });

    it("should apply and remove filters", function () {
        cy.wait(2000);
        const carPaintType = cy.get("input").eq(3);
        carPaintType.click();
        carPaintType.should("be.checked");
        const templateTitleText = "car paint test"+btoa(Math.random()).substr(10, 5);
        cy.get("input").first().type(templateTitleText);
        cy.get("button[class=\"btn btn-success\"]").click();
        const presetsDropdown =cy.get("select");
        presetsDropdown.contains(templateTitleText);

        cy.get("button[class=\"btn btn-danger\"]").click();
        cy.get("select").should("have.value", 0);
        carPaintType.should("not.be.checked");
    });
});
