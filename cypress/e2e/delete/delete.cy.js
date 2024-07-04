it('create user with fixture another option', () => {
    let randomText = ""
    let testEmail = ""
    
    var pattern = "REINALDOAPARECIDOFERNANDESREINALDOAPARECIDOFERNANDES"
        for (var i = 0; i< 10; i++)
            randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@kobel.com.br'

        cy.fixture('createuser').then((payload) => {
            cy.api({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {
                    'authorization': 'Bearer c3119c71b5637ceff9af7ee76d85bc2f4561976bf3acf4d8f1f910daf4c75519'
                },
                body: {
                'name': 'Gajbaahu',
                'gender': 'female',
                'email': testEmail,
                'status': 'active'
                }
                
            }).then((res) => {
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(201)
                expect(res.body).has.property('email', testEmail)
                // }).then((res) =>
                    const userId = res.body.id
                cy.request({
                    method: 'DELETE',
                    url: 'https://gorest.co.in/public/v2/users/' + userId,
                    headers: {
                        'authozization' : 'Bearer c3119c71b5637ceff9af7ee76d85bc2f4561976bf3acf4d8f1f910daf4c75519'
                    }
                }).then ((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
})