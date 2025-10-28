//Modulos em nodejs são arquivos separados que contêm código reutilizável.
//Cada arquivo é tratado como um módulo distinto, permitindo organizar o código em partes menores e mais gerenciáveis.
//Para criar um módulo, basta criar um arquivo JavaScript e exportar as funcionalidades que deseja tornar disponíveis para outros arquivos.
//Para exportar algo em um módulo, usamos a palavra-chave module.exports.
//Para importar um módulo em outro arquivo, usamos a função require().

this.ola = 'Fala Pessoal' //Exportando uma string
exports.bemVindo = 'Bem vindo ao node!' //Exportando outra string
module.exports.ateLogo = 'Até o próximo exemplo' //Exportando mais uma string