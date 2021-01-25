// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
const StorageService = require("../../src/services/storageService");

Cypress.Commands.add("login", async (inputEmail, inputPassword)=>{
    await fetch("https://reactivelads.herokuapp.com/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email:inputEmail, password: inputPassword })
    })
        .then((data) => data.json())
        .then((data) => {
            if (data.accessToken) {
                const token = data.accessToken;
                StorageService.saveToken(token);
                StorageService.saveUserInfo({ email: inputEmail });
            } else {
                throw new Error(data);
            }
        })
        .catch((error) => {
            alert("err on cypress login... " + error);
        });
});