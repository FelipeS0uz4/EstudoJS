//mais teste de middleware

function saudacao(nome) {
    return function(req, res, next) { //middleware function
        console.log(`Olá, seja bem-vindo ${nome}!`);
        next(); //chama o próximo middleware ou rota
    }
}

module.exports = saudacao;  