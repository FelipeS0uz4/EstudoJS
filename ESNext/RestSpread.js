//Operador ... rest(Juntar)/Spread(espalhar)
//usar rest com parâmetro de função

//Operador rest 
function total (...numeros){
    let total = 0
    numeros.forEach(n => {
        total += n
    });
    return console.log(total)
}

total(2,2,2,2,2)

//Usar spread com objeto
const funcionario = {nome:"Felipe", salario:1.500}
const clone = {ativo:true,...funcionario}
console.log(clone)

//Usar spread com array
const grupoA = ['Joao', 'Maria','Felipe']
const grupoFinal = ['Nicolas','Rafal',...grupoA]
console.log(grupoFinal)