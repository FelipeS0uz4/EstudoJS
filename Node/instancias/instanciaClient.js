const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()//invoca a factory
const contadorD = require('./instanciaNova')()//invoca a factory

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor)//3
console.log(contadorB.valor)//3 - mesma instância

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor)//3
console.log(contadorD.valor)//1 - instâncias diferentes