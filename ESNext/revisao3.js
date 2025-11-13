// ES8: Object.values/Object.entries
const obj = {
    a:1, b:2,c:3
}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Notação Literal
const nome = 'Felipe'
const pessoa ={
    nome:nome,
    ola(){
        return 'ola'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'Au Au'
    }
}
console.log(new Cachorro().falar())