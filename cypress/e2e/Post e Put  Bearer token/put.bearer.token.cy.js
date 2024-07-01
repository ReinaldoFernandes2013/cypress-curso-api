it('create user with fixture another option', ()=> {
    let randomText = ''
    let testEmail = ''

    var pattern = 'Reinaldo Aparecido Fernandes'
    for (var i = 0; i< 10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
    testEmail = randomText + '@gmail.com'

    cy.fixture('createuser').then((payload) =>{
        // Cypress fornece um diretório nomeado como fixtures, que armazena vários arquivos "JSON",
        //e esses arquivos JSON podem armazenar os dados de teste que podem ser lidos por vários testes.
        // Armazenamos dados de teste na forma de valores-chave, que podemos acessar nos scripts de teste.

        cy.api({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'authorization': 'Bearer c3119c71b5637ceff9af7ee76d85bc2f4561976bf3acf4d8f1f910daf4c75519'
            },
            body: {
                'name': 'Vaishno',
                'gender': 'Male',
                // 'email': 'vaishno_jain@bosco.example'
                'email': testEmail,
                'status': 'active'
            }
        }).then((res) =>{
        cy.log(JSON.stringify(res))
        expect(res.status).to.eq(201)
        // expect (res.body.data).has.property('email', 'reinaldo.fernandes@kobel.com.br')
        expect(res.body.data).has.property('email',testEmail)
        const userId = res.data.id 
                cy.request({
                    method: 'PUT',
                    url: 'https://gorest.co.in/public/v2/users' + userId,
                    headers: {
                        'authorization': 'Bearer c3119c71b5637ceff9af7ee76d85bc2f4561976bf3acf4d8f1f910daf4c75519'
                    },
                    body: {
                        'name': 'Vaishno Jain',
                        'gender': 'Male',
                        //'email': 'vaishno_jain@bosco.example',
                        'email': payload.email,
                        'status': 'inactive'
                    }        

                }).then ((res) =>{
                expect(res.status).to.eq(200)
                // expect(res.body.data).has.property('email','vaishno_jain@bosco.example')
                expect(res.body.data).has.property('email', payload.email)
                expect(res.body.data).has.property('name', 'Vaishno Jain')

            })
        })
    })
})