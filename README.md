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

<<<<<<< HEAD
Contribuições
Sinta-se à vontade para sugerir melhorias, correções ou diferentes casos de teste para este código.

=======
REDME.MD
Teste de falha de autenticação (401) - Typeform API

Este arquivo descreve um teste automatizado utilizando Cypress para verificar se a API do Typeform retorna um erro 401 (Não Autorizado) quando uma requisição é feita sem credenciais de autenticação.

Pré-requisitos
Cypress instalado
Conhecimento básico de Cypress e escrita de testes automatizados
Configuração
Certifique-se de ter configurado o Cypress em seu projeto.
Instale as dependências necessárias (cypress install).
Executando o teste
Abra o terminal no diretório do projeto.
Execute o comando cypress run para rodar todos os testes.
O resultado do teste será exibido no terminal, indicando se a API retornou o erro 401 esperado.
O que o teste verifica
Este teste faz uma requisição GET para a URL https://api.typeform.com/me sem incluir credenciais de autenticação no cabeçalho da requisição.

failOnStatusCode: false: Desabilita o comportamento padrão do Cypress de falhar o teste em caso de status code diferente de 200.
Validação do status code: O teste verifica se o status code da resposta é igual a 401.
Validação do corpo da resposta (duas opções):
O teste verifica se o corpo da resposta contém a string AUTHENTICATION_FAILED.
(Alternativo) O teste parseia o corpo da resposta como JSON e verifica se o objeto possui as propriedades code e description com os valores 'AUTHENTICATION_FAILED' e 'Authentication credentials not found on the Request Headers', respectivamente.
Observação
Este teste é um exemplo básico de como verificar um erro de autenticação na API do Typeform. Você pode adaptá-lo para outras APIs e cenários de teste.

Importante: Não inclua credenciais reais de autenticação neste arquivo ou no código de teste. Utilize variáveis de ambiente ou outro mecanismo seguro para armazenar credenciais sensíveis.


REDME.MD
Teste de verificação de propriedade em lista de usuários (API ReqRes)

Este arquivo descreve um teste automatizado utilizando Cypress para verificar se todos os usuários em uma lista obtida da API ReqRes possuem a propriedade first_name.

O que o teste verifica
Carregar lista de usuários: O teste utiliza o comando cy.api para realizar uma requisição GET para a URL https://reqres.in/api/users?page=2, que retorna uma lista de usuários paginada (página 2). O alias 'users' é atribuído à requisição para facilitar o acesso à resposta.
Iterar pela lista: O teste utiliza o comando cy.get('@users') para acessar a resposta armazenada com o alias e, em seguida, utiliza o comando its('body') para extrair o corpo da resposta (onde a lista de usuários está localizada).
Verificação da propriedade: O teste utiliza o método forEach para iterar sobre cada elemento da lista de usuários obtida do corpo da resposta. Dentro do loop, utiliza o comando expect(element).has.property('first_name') para verificar se cada elemento possui a propriedade first_name.
Observação
Este teste verifica a existência da propriedade first_name, mas não valida o valor. Você pode adaptar o teste para verificar valores específicos ou outras propriedades de acordo com a sua necessidade.

Importante: Este exemplo utiliza a página 2 da API ReqRes para fins demonstrativos. Você pode alterar a página desejada modificando o parâmetro page na URL da requisição.

REDME.MD
Teste de criação e deleção de usuário com fixture (API Gorest)

Este arquivo descreve um teste automatizado utilizando Cypress para criar um usuário na API Gorest e posteriormente realizar sua deleção. O teste utiliza um fixture para armazenar dados básicos do usuário e gera aleatoriamente um email para evitar conflitos.

Executando o teste
Abra o terminal no diretório do projeto.
Execute o comando cypress run para rodar todos os testes.
O resultado do teste será exibido no terminal, indicando se o usuário foi criado e deletado com sucesso.
O que o teste verifica
Geração de email aleatório: O teste gera um email aleatório concatenando uma string base com caracteres aleatórios e finalizando com um domínio fixo.
Carregar dados do fixture: O teste utiliza o comando cy.fixture para carregar os dados básicos do usuário armazenados no arquivo createuser.json.
Criação de usuário:
O teste monta o payload da requisição POST utilizando os dados do fixture e o email gerado aleatoriamente.
O teste utiliza o comando cy.api para realizar uma requisição POST para a URL https://gorest.co.in/public/v2/users incluindo o token de acesso no header.
Validação da criação:
O teste verifica se o status code da resposta é 201 (Created).
O teste verifica se o corpo da resposta possui a propriedade email com o valor do email gerado.
Extração do ID do usuário: O teste extrai o ID do usuário recém-criado a partir do corpo da resposta.
Deleção do usuário:
O teste utiliza o comando cy.request para realizar uma requisição DELETE para a URL https://gorest.co.in/public/v2/users/ concatenada com o ID do usuário extraído anteriormente.
O teste utiliza o token de acesso no header da requisição DELETE.
Validação da deleção: O teste verifica se o status code da resposta da deleção é 204 (No Content).
Observação
Este teste utiliza um fixture para manter os dados básicos do usuário reutilizáveis. O email é gerado aleatoriamente para evitar conflitos em ambientes de teste.

Automatização de API com Comandos Customizados no Cypress

Este arquivo descreve dois testes automatizados utilizando Cypress para interagir com APIs:

1. Teste utilizando Comando Customizado (cy.getAPI)

Este teste demonstra o uso de um comando customizado (cy.getAPI) para realizar uma requisição GET.
O comando customizado não está incluído neste exemplo, mas deve ser implementado separadamente para encapsular a lógica de requisição e tratamento de resposta.
2. Teste interagindo com documentação da API Cypress

Este teste utiliza o contexto Cypress.arch para focar em testes relacionados à arquitetura do Cypress.
O teste (ainda em desenvolvimento) visa demonstrar como obter e configurar opções de configuração do Cypress.

Executando os testes
Abra o terminal no diretório do projeto.
Execute o comando cypress run para rodar todos os testes.
O resultado dos testes será exibido no terminal, indicando se as requisições e validações foram bem-sucedidas.
O que os testes verificam
1. Teste utilizando Comando Customizado (cy.getAPI):

O teste utiliza o comando customizado cy.getAPI para realizar uma requisição GET para a URL https://gorest.co.in/public-api/users.
O teste verifica se o status code da resposta é 200 (OK).
O teste verifica se o corpo da resposta possui a propriedade meta.pagination.limit com o valor 10, indicando o limite de itens por página.
2. Teste interagindo com documentação da API Cypress (em desenvolvimento):

O teste utiliza o contexto Cypress.arch para focar em testes de arquitetura do Cypress.
O teste (ainda não implementado) visa demonstrar como obter e configurar opções de configuração do Cypress.
Observação
O primeiro teste depende da implementação do comando customizado cy.getAPI.
O segundo teste está em desenvolvimento e precisa ser complementado para verificar a obtenção e configuração de opções do Cypress.
Importante:

A URL https://gorest.co.in/public-api/users é usada como exemplo. Adapte o teste para a API que deseja testar.
Substitua a documentação da API Cypress (https://example.cypress.io/cypress-api) pela documentação real que você deseja utilizar.

Teste de consulta de CEP via API dos Correios

Este arquivo descreve um teste automatizado utilizando Cypress para consultar informações de um CEP específico na API dos Correios.

Observação:

É possível encontrar documentação e exemplos de uso da API dos Correios em https://viacep.com.br/.
A habilitação de conta nos Correios pode ser necessária para consulta de CEPs reais. Utilize CEPs de exemplo como 01001000 para testes iniciais sem a necessidade de conta.
Executando o teste
Abra o terminal no diretório do projeto.
Execute o comando cypress run para rodar todos os testes.
O resultado do teste será exibido no terminal, indicando se a consulta foi bem-sucedida e os dados do CEP correspondem ao esperado.
O que o teste verifica
O teste utiliza o comando customizado cy.getCep01001000 (provavelmente implementado em outro arquivo).
Importante: Certifique-se de implementar o comando cy.getCep01001000 para realizar a requisição GET para a API dos Correios utilizando a variável de ambiente API_CEP e o CEP específico (no caso, 01001000).
O teste verifica se o status code da resposta é 200 (OK).
O teste verifica se o corpo da resposta possui as seguintes propriedades e valores esperados:
cep: igual a '01001-000'
logradouro: igual a 'Praça da Sé'
complemento: igual a 'lado ímpar'
bairro: igual a 'Sé'
localidade: igual a 'São Paulo'
uf: igual a 'SP'
ibge: igual a '3550308'
gia: igual a '1004'
ddd: igual a '11'
siafi: igual a '7107'
Observação
O teste utiliza o CEP 01001000 como exemplo. Você pode adaptar o comando cy.getCep para receber um CEP como parâmetro e realizar testes dinâmicos.
A consulta de CEPs reais pode exigir autenticação na API dos Correios. Verifique a documentação da API para obter mais informações.

Explorando Objetos e Métodos do Cypress

Este arquivo descreve testes automatizados utilizando Cypress para explorar diversos objetos e métodos disponibilizados pela biblioteca.

Executando os testes
Abra o terminal no diretório do projeto.
Execute o comando cypress run para rodar todos os testes.
O resultado dos testes será exibido no terminal, indicando se as interações com os objetos e métodos do Cypress foram bem-sucedidas.
Objetos e Métodos Explorados
Esse arquivo de teste cobre diversos objetos e métodos do Cypress, agrupados por contexto para melhor organização.

Cypress.Commands
.add() - permite criar comandos customizados para reuso em seus testes.
Cypress.Cookies
.debug() - habilita ou desabilita o modo debug para registro de cookies no console.
.preserveOnce() - preserva cookies específicos para que não sejam resetados entre os testes.
.defaults() - define configurações padrão para cookies, como preservação automática.
Cypress.arch
Permite obter o nome da arquitetura da CPU do sistema operacional em que os testes estão sendo executados.
Cypress.config
Permite obter e configurar opções globais do Cypress, como timeout de carregamento de página e resolução da viewport.
Cypress.dom
.isHidden() - verifica se um elemento DOM está oculto com base no estilo CSS.
Cypress.env
Permite definir e obter variáveis de ambiente para cenários de teste dinâmicos.
Cypress.log
Fornece métodos para controlar o que é impresso no log de comandos durante a execução dos testes.
Cypress.platform
Permite obter o nome do sistema operacional subjacente (ex: 'win32', 'darwin', etc.).
Cypress.version
Permite obter a versão do Cypress atualmente em execução.
Cypress.spec
Permite obter informações sobre o arquivo de especificação de teste atual (ex: nome, caminho relativo e absoluto).
Observação
Este arquivo serve como um exemplo para explorar funcionalidades do Cypress. Os testes individuais não possuem validações específicas, pois o foco está na demonstração dos objetos e métodos. Você pode adaptar os conceitos para criar testes funcionais de acordo com sua necessidade.

Importante:

A URL https://example.cypress.io/cypress-api é usada como exemplo para ilustrar as visitas em cada teste. Substitua essa URL pela URL da sua aplicação sob teste.
Os métodos explorados possuem documentação oficial do Cypress. Consulte a documentação (https://docs.cypress.io/guides/overview/why-cypress) para aprofundar o conhecimento sobre cada objeto e método.

Contribuições
Sinta-se à vontade para sugerir melhorias, correções ou diferentes casos de teste para este código.
>>>>>>> ad74886cb55c0b252ab43eb1f31ee844f1e333f3
