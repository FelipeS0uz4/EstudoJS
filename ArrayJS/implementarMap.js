//implementar o map
Array.prototype.novoArray = function(callback) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        novoArray.push(callback(this[i], i, this))
    }
    return novoArray
}



//retorne um array com os preços dos produtos
const carrinho = [
    '{"nome":"Borracha","preco":3.45}',
    '{"nome":"Caderno","preco":13.90}',
    '{"nome":"Kit de Lápis","preco":41.22}',
    '{"nome":"Caneta","preco":7.50}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco.toFixed(2)

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
