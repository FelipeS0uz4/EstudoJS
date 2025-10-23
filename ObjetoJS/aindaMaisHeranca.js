// simular operador new a partir de uma funcao construtora
function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params){ // rest operator
    const obj = {}  // cria um objeto vazio
    obj.__proto__ = f.prototype // define o protótipo do objeto como o protótipo da função construtora
    f.apply(obj, params) // executa a função construtora com o objeto criado como contexto e os parâmetros passados
    return obj 
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)
console.log(aula3, aula4)