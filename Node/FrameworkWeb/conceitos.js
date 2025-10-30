//Frameworks é uma coleção de bibliotecas e ferramentas que fornecem uma estrutura padrão para o desenvolvimento de aplicações web.
//Framework estrutura sua aplicação em torno de conceitos-chave que facilitam o desenvolvimento e a manutenção do código. Aqui estão alguns dos principais conceitos:

//1. Middleware:
//Middleware são funções que têm acesso ao objeto de solicitação (req), o objeto de resposta (res) e a próxima função de middleware no ciclo de solicitação-resposta. Eles podem executar código, modificar req e res, encerrar o ciclo de solicitação-resposta ou chamar o próximo middleware na pilha.

//2. Roteamento (Routing):
//O roteamento é o processo de definir como a aplicação responde a uma solicitação de cliente para um endpoint específico, que é uma URI (ou caminho) e um método HTTP (GET, POST, etc.). O roteamento permite mapear URLs para funções específicas que lidam com essas solicitações.

//3. Controladores (Controllers):
//Controladores são responsáveis por lidar com a lógica de negócios da aplicação. Eles recebem as solicitações do cliente, interagem com os modelos para obter ou modificar dados e retornam respostas apropriadas.

//4. Modelos (Models):
//Modelos representam a estrutura dos dados da aplicação e geralmente interagem com o banco de dados. Eles definem como os dados são armazenados, validados e recuperados.

//5. Vistas (Views):
//Vistas são responsáveis pela apresentação dos dados ao usuário. Elas geram a interface do usuário, geralmente em HTML, com base nos dados fornecidos pelos controladores.