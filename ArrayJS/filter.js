const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

//O filter sempre retorna um array, com a mesma quantidade ou menos elementos do array original
//ele recebe uma função de callback que deve retornar true ou false
//se retornar true o elemento será mantido no novo array
//se retornar false o elemento será descartado
console.log(produtos.filter(function(p) {
    return p.preco > 10
}))

console.log(produtos.filter(function(p) {
    return p.fragil
}))

console.log(produtos.filter(function(p) {
    return p.fragil ===false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil    
console.log(produtos.filter(caro).filter(fragil))

