describe("<SavedPresets/> e2e", () => {
    const user = "delian1914@abv.bg";
    const pass = "1234";
    beforeEach(() => {
        cy.login(user, pass);
        cy.visit("http://localhost:3000/");
    });

    afterEach(()=>{
        cy.clearLocalStorage();
    });

    it("<SavedPresets/> should be loaded", function () {
        cy.get("h5").first().should("contain", "Saved Presets");
    });

    it("should apply and remove filters", function () {
        cy.wait(2000);

        //filters
        const carPaintType = cy.get("input").eq(3);
        carPaintType.click();
        carPaintType.should("be.checked");
        const searchBox = cy.get("input[class=\"form-control form-control-sm mb-3\"]");
        searchBox.type("car");
        searchBox.should("have.value", "car");

        //template title
        const templateTitleText = "car paint test"+btoa(Math.random()).substr(10, 5);
        const templateInput = cy.get("input").first();
        templateInput.type(templateTitleText);
        templateInput.should("have.value", templateTitleText);

        // add
        cy.get("button[class=\"btn btn-success\"]").click();
        const presetsDropdown =cy.get("select");
        presetsDropdown.contains(templateTitleText);

        // remove
        cy.get("button[class=\"btn btn-danger\"]").click();

        // final assert
        cy.get("select").should("have.value", 0);
        cy.get("input").eq(3).should("not.be.checked");
        cy.get("input[class=\"form-control form-control-sm mb-3\"]").should("have.value", "");
    });
});
