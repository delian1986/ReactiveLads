describe("update <UserDetails/> e2e", () => {
    const email = "a@g.c";
    const password = "1111";
    const firstName = "Aleksandar";
    const lastName = "Ivanov";

    beforeEach(()=>{
        cy.login(email, password);
        cy.visit("http://localhost:3000/"); 
        cy.wait(2000);
    });
   
    it("<UserDetails/> should be loaded", function () {       
       
        cy.get("a[name=userDetails]").click();              
        cy.get("input[name=firstName").should("have.value", firstName).type(".edited");        
        cy.get("input[name=lastName").should("have.value", lastName).type(".edited");        
        cy.get("input[name=password").type(password);                
        cy.wait(2000);
        
        cy.get("button[name=apply]").should("contain", "Apply").click();
    }); 

    it("<UserDetails/> should be updated", function () {  
              
        cy.get("a[name=userDetails]").click();     
        cy.wait(2000);         
        cy.get("input[name=firstName").should("have.value", firstName + ".edited").clear().type(firstName);        
        cy.get("input[name=lastName").should("have.value", lastName + ".edited").clear().type(lastName);        
        cy.get("input[name=password").clear().type(password);                
        cy.wait(2000);
        cy.get("button[name=apply]").click();
    }); 
});