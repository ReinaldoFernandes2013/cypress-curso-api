const API_CEP = Cypress.env('API_CEP')

describe('Testes automatizados da API, consulta CEP', () =>{
    it('Consulta de CEP válido', () => {
           cy.api({
        // cy.request({ //HABILITA O MODO DE VISUALIZAÇÃO NA INTERFACE GRÁFICA É SÓ SUBSTITUIR O CY.RESQUEST POR CY.API
            method: 'GET',
            url: API_CEP,
            failOnStatusCode: false // QUALQUER STATUS CODE DIFERENTE DE 200 A 300 O CYPRESS CONSIDERA
            // UM ERRO. ENTÃO PARA TESTAR ERRO, AQUI TEM QUE ESTAR SEMPRE FALSE, OU VAI DAR ERRO NOS INSUCESSO
        }).as('response')
        //Salva o retorno como response e a partir desse momento trabalhamos com o response
        cy.get('@response').should((response) =>{
            expect(response.status).to.equal(200)
            expect(response.body.cep).to.equal('01001-000')
            expect(response.body.logradouro).to.equal('Praça da Sé')
            expect(response.body.complemento).to.equal('lado ímpar')
            expect(response.body.unidade).to.equal('')
            expect(response.body.bairro).to.equal('Sé')
            expect(response.body.localidade).to.equal('São Paulo')
            expect(response.body.uf).to.equal('SP')
            expect(response.body.ibge).to.equal('3550308')
            expect(response.body.gia).to.equal('1004')
            expect(response.body.ddd).to.equal('11')
            expect(response.body.siafi).to.equal('7107')
        })
    })

    it('Verificar Headers', () => {
        cy.api({ //HABILITA O MODO DE VISUALIZAÇÃO NA INTERFACE GRÁFICA É SÓ SUBSTITUIR O CY.RESQUEST POR CY.API
        // cy.request ({ //HABILITA O MODO DE VISUALIZAÇÃO NA INTERFACE GRÁFICA É SÓ SUBSTITUIR O CY.RESQUEST POR CY.API
            method: 'GET',
            url: 'https://viacep.com.br/ws/01001000/json', // SEM O COMANDO CUSTOMIZADO
            failOnStatusCode: false // NÃO PRECISARIA POIS O STATUS JÁ SERIA UM 200
        }).as('response')
        cy.get('@response').should((response) => {
            expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8')
        })
    })
    
    it('Verificar Headres Segunda forma', () => {
        cy.api('GET', 'https://viacep.com.br/ws/01001000/json').then((response) => {
            expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8')
        })
    })

})