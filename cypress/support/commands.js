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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getCep01001000', () =>{
    cy.api({
        method: 'GET',
        url: 'https://viacep.com.br/ws/01001000/json/',

    })
});

Cypress.Commands.add('getAPI', (urlParam) => {
    cy.request({
        method: 'GET',
        url: urlParam,
        headers : {
            Authorization: 'Bearer c3119c71b5637ceff9af7ee76d85bc2f4561976bf3acf4d8f1f910daf4c75519'
            
        }
    })
})
