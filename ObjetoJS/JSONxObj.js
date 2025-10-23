//JSON é um formato textual de dados, independente de linguagem, leve e fácil de ler e escrever.
//É usado para troca de dados entre sistemas, principalmente em aplicações web.
//JSON é uma representação textual de um objeto JavaScript, mas não é um objeto JavaScript.
//JSON suporta apenas um subconjunto dos tipos de dados do JavaScript: strings, números, booleanos, arrays, objetos e null.
//JSON não suporta funções, datas, undefined, símbolos e outros tipos de dados do JavaScript.
//JSON é usado principalmente para serializar e desserializar dados, ou seja, converter objetos JavaScript em strings JSON e vice-versa.

// Convertendo um objeto JavaScript em uma string JSON
const obj = {a: 1, b: 2, c: 3, soma(){ return a + b + c }}
console.log(JSON.stringify(obj)) // {"a":1,"b":2,"c":3} - a função soma não é incluída na string JSON

// Convertendo uma string JSON em um objeto JavaScript
console.log(JSON.parse('{"a":1,"b":2,"c":3}')) // { a: 1, b: 2, c: 3 }

// Convertendo uma string JSON em um objeto JavaScript com uma função de transformação
console.log(JSON.parse('{"a":1,"b":2,"c":3}', (key, value) => {
    if (key === 'c') {
        return value + 1 // incrementa o valor de c em 1
    }
    return value // retorna o valor original para outras chaves
})) // { a: 1, b: 2, c: 4 }

// Convertendo um objeto JavaScript em uma string JSON com uma função de transformação
console.log(JSON.stringify(obj, (key, value) => {
    if (key === 'b') {
        return undefined // remove a chave b do objeto
    }
    return value // retorna o valor original para outras chaves
})) // {"a":1,"c":3} - a chave b foi removida da string JSON

// Convertendo um objeto JavaScript em uma string JSON com um array de chaves
console.log(JSON.stringify(obj, ['a', 'c'])) // {"a":1,"c":3} - apenas as chaves a e c são incluídas na string JSON
// Convertendo um objeto JavaScript em uma string JSON com formatação
console.log(JSON.stringify(obj, null, 2)) // formata a string JSON com 2 espaços de indentação
// {
//   "a": 1,
//   "b": 2,
//   "c": 3
// }