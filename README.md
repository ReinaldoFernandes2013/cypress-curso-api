# cypress-curso-api

Começando com o Cypress: Seu Guia Completo para Testes Automatizados Web
O que é o Cypress?

O Cypress é um framework de testes de ponta para web que revoluciona a forma como você testa seus aplicativos web. Diferentemente de outras ferramentas, o Cypress roda dentro do seu navegador, proporcionando uma experiência de teste rápida, confiável e visualmente intuitiva.

Por que usar o Cypress?

Testes rápidos: O Cypress executa testes em tempo real, sem a necessidade de um servidor de teste separado, resultando em testes mais rápidos e eficientes.
Confiabilidade aprimorada: O Cypress oferece testes autocuraveis, que se adaptam automaticamente a mudanças na interface do usuário, garantindo a confiabilidade dos testes ao longo do tempo.
Visão completa: O Cypress fornece uma visão completa da execução dos testes, permitindo que você visualize interações com a interface do usuário, capturas de tela e logs em tempo real.
Fácil de aprender: O Cypress possui uma sintaxe simples e intuitiva em JavaScript, tornando-o fácil de aprender e usar, mesmo para iniciantes em testes de software.

O que você precisa para começar:

Instalar o Node.js: O Cypress é executado no Node.js, portanto, você precisa instalá-lo em sua máquina. Você pode encontrar o instalador em https://nodejs.org/en/download/package-manager.
Instalar o Cypress: Após instalar o Node.js, abra um terminal e execute o seguinte comando:
npm install cypress
Criar um projeto Cypress: Navegue até o diretório onde deseja criar seu projeto e execute o seguinte comando:
npx cypress init
Executar os testes: Para executar os testes padrão do Cypress, basta executar o seguinte comando:
npx cypress run
Recursos Adicionais:

Documentação oficial do Cypress: https://docs.cypress.io/guides/overview/why-cypress
Tutoriais do Cypress: https://docs.cypress.io/examples/tutorials
Comunidade do Cypress: https://github.com/cypress-io/cypress
Comece sua jornada de testes automatizados web com o Cypress hoje mesmo!




Para Testes Automatizados da API de Consulta de CEP

Descrição
Este arquivo documenta os testes automatizados criados para validar a API de consulta de CEP, utilizando a biblioteca Cypress.

Cenários de Teste

1. Consulta de CEP Válido:

Verifica se o status da resposta é 200 (sucesso).
Valida os campos do JSON de resposta, como CEP, logradouro, complemento, unidade, bairro, localidade, UF, IBGE, GIA, DDD e SIAFI.

2. Verificar Headers:

Confirma se o cabeçalho Content-Type da resposta está correto: application/json; charset=utf-8.

3. Verificar Headers (Segunda Forma):

Utiliza o método then para verificar o cabeçalho Content-Type da resposta.

⚙️ Pré-requisitos
Ter o Cypress instalado.

Configurar a variável de ambiente API_CEP com a URL da API de consulta de CEP.

‍♂️ Executando os Testes

Abra o terminal e navegue até o diretório do projeto.
Execute o comando: npx cypress run
Resultados
Os resultados dos testes serão exibidos no terminal e na interface gráfica do Cypress.

Observações
Os testes utilizam o modo de visualização da interface gráfica do Cypress para facilitar a análise dos resultados.
O comando failOnStatusCode está configurado como false para permitir a validação de respostas com status diferentes de 200 (por exemplo, para testar erros).
O teste Verificar Headers utiliza duas formas de verificar o cabeçalho: com o comando should e com o método then.


Validador de Esquema JSON
Este arquivo descreve um teste para validar a estrutura de dados (esquema) de objetos JSON.

Cenário de Teste
O teste verifica se dois objetos JSON fornecidos atendem ao esquema JSON definido.

Como Funciona
Define-se um esquema JSON que especifica os campos obrigatórios, seus tipos e restrições.
Criam-se dois objetos JSON de exemplo.
Utiliza-se a asserção expect(object).to.be.jsonSchema(schema) do Chai para validar cada objeto contra o esquema.

Pré-requisitos
Ter o Chai (assertion library) instalado em seu projeto. Você pode instalá-lo usando npm:
npm install chai

Executando o Teste
Certifique-se de que o código está salvo em um arquivo (por exemplo, schemaValidator.js).
Inclua o Chai em seu arquivo de teste e execute o teste usando uma biblioteca de teste como Jest ou Mocha.

Exemplo de Saída
Se os objetos JSON forem válidos de acordo com o esquema, o teste passará e nenhuma mensagem de erro será exibida. Se algum objeto violar o esquema, o teste falhará e a mensagem de erro indicará qual propriedade do objeto não corresponde ao esquema.


Testes Automatizados de API com Cypress

Este arquivo descreve testes automatizados de API criados com o Cypress para validar funcionalidades de diferentes APIs.

Cenários de Teste
create user with fixture another option
Cria um usuário com um email randômico e valida o status da requisição de criação (201 - Criado).
Atualiza o usuário para o status "inativo".
Utiliza um fixture (createuser.json) para armazenar dados de teste reutilizáveis (opcional).
API KEY com postman
Realiza uma requisição GET para a API do Postman utilizando uma API Key na autorização e valida o status da requisição (200 - Sucesso).
API KEY com weatherapi Query params
Realiza uma requisição GET para a API do Weather Open Weather Map utilizando parâmetros de consulta (query params) e uma API Key e valida o status da requisição (200 - Sucesso).

Pré-requisitos
Ter o Cypress instalado.
Possuir uma conta e API Key nas plataformas utilizadas nos testes (Postman e Open Weather Map - opcional).
(Opcional) Criar um fixture chamado createuser.json no diretório cypress/fixtures contendo dados de usuário para o primeiro teste (nome, gênero). O email será gerado aleatoriamente no teste.
Executando os Testes
Abra o terminal e navegue até o diretório do projeto.
Execute o comando: npx cypress run

Observações
Os testes utilizam o comando cy.api para realizar requisições às APIs.
O primeiro teste gera um email randômico a cada execução, evitando conflitos de dados.
Os logs das requisições e respostas são impressos no console do Cypress.

Contribuições
Sinta-se à vontade para sugerir melhorias, correções ou diferentes casos de teste para este código.
