// Object.preventExtensions (impede que novas propriedades sejam adicionadas ao objeto)
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // não vai ser adicionado
delete produto.tag
console.log(produto)

// Object.seal (impede que novas propriedades sejam adicionadas e que propriedades existentes sejam removidas)
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva' // não vai ser adicionado
delete pessoa.nome // não vai ser removido
pessoa.idade = 29 // pode alterar propriedades existentes
console.log(pessoa)

// Object.freeze = selado + valores constantes (impede que novas propriedades sejam adicionadas, que propriedades existentes sejam removidas e que os valores das propriedades existentes sejam alterados)
const carro = {marca: 'Ford', modelo: 'Ka', ano: 2019}
Object.freeze(carro)
console.log('Congelado:', Object.isFrozen(carro))
carro.ano = 2020 // não vai alterar
delete carro.marca // não vai remover
carro.modelo = 'Palio' // não vai alterar
carro.preco = 40000 // não vai adicionar
console.log(carro)