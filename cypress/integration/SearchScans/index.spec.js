describe("Single result | multiple results <Search/> e2e", () => {
    const email = "a@g.c";
    const password = "1111";   

    beforeEach(()=>{
        cy.login(email, password);
        cy.visit("http://localhost:3000/"); 
        cy.wait(2000);
    });
   
    it("<Search/> signle result should be validated", function () {       
        cy.get("input[name=searchBox]").type("cnv82");                          
        cy.wait(2000);
        cy.get("h5").should("be.visible").should("have.length", 6);
        cy.wait(2000);
    });     
    it("<Search/> multiple results should be validated", function () {       
        cy.get("input[name=searchBox]").type("sld");                          
        cy.wait(2000);
        cy.get("div[class=card]").should("have.length", 4);    
        cy.wait(2000);                      
    });
});