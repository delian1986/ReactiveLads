describe("<MaterialTypes/> e2e", () => {
    const user = "delian1914@abv.bg";
    const pass = "1234";
    beforeEach(() => {
        cy.login(user, pass);
        cy.visit("http://localhost:3000/");
    });

    afterEach(() => {
        cy.clearLocalStorage();
    });

    it("<MaterialTypes/> should be loaded", function () {
        cy.get("h5").eq(2).should("contain", "Material Types");
    });

    it("should apply and remove material type filters", function () {
        cy.wait(2000);

        const fabricMaterialType = cy.get("input[type=checkbox]").eq(1);
        fabricMaterialType.click();
        fabricMaterialType.should("be.checked");

        fabricMaterialType.click();
        fabricMaterialType.should("not.be.checked");
    });

    it("should return no scans", function () {
        cy.wait(2000);

        const glossyTag = cy.get("input[type=checkbox]").eq(16);
        glossyTag.click();
        glossyTag.should("be.checked");

        cy.wait(2000);

        const hologramMaterialType = cy.get("input[type=checkbox]").eq(14);
        hologramMaterialType.click();
        hologramMaterialType.should("be.checked");

        cy.wait(2000);

        cy.get("div[class=\"card p-3 overflow-auto h-100\"]").should("contain", "No results.");
    });
});
