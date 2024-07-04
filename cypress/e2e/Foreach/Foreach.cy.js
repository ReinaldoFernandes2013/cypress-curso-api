const { getProperty } = require("ajv/dist/compile/codegen")

describe('', () => {
    beforeEach(() => {
        // 'users' is an alias
        cy.api('GET', 'https://reqres.in/api/users?page=2').as('users')
    })

    it('Fazer o for each', () => {
        cy.get('@users')
            .its('body').then((res) => {
                res.data.forEach(element => {
                    expect(element).has.property('first_name')
                })
            })
    })
})