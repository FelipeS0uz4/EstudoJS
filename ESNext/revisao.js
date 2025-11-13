//let, const e var 
//let funciona em formato de bloco.

{
    var a = 2;
    let b = 3;
    console.log(b)
}

console.log(a)
//console.log(b) não funcionará pois o let funciona em bloco 
//templete string 
const produto = "iPad"
console.log(`${produto} é caro`)

//destructuring 
const [l,e,...tras] = "CODER"
console.log(l,e,tras)

const {idade,nome} = {nome:'Felipe',idade:21}
console.log(idade,nome)