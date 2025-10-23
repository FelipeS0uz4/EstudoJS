const PrimeiroExercicio = function(){
    console.log("Primeiro Exercício");
    const soma = (x,y) => x+y;
    const subtracao = (x,y) => x-y;
    const multiplicacao = (x,y)=> x*y;
    const divisao = (x,y) => x/y;     
    console.log("Soma: "+soma(3,4));
    console.log("Subtração: " +subtracao(5,2));
    console.log("Multplicação: " +multiplicacao(3,3));
    console.log("Divisão: "+divisao(10,2));
}; 

const SegundoExercicio = function(){
    console.log("Segundo Exercício");
    const triangulos = (x,y,z) => {
        if(x===y && y===z){
            return "Equilátero";
        }
        else if(x===y || y===z || x===z){
            return "Isósceles";
        }   
        else{
            return "Escaleno";
        }
    };
    console.log(triangulos(3,3,3));
    console.log(triangulos(3,4,3));
    console.log(triangulos(3,4,5));
}

const TerceiroExercicio = function(){
    console.log("Terceiro Exercício");  
    const baseElevada = (x,y) => x**y;
    console.log(baseElevada(3,3));
}

PrimeiroExercicio();
SegundoExercicio();
TerceiroExercicio();