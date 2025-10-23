// Função tradicional
let dobro = function(x){
    return x*2;
}

// Arrow function
const triplo = (x) =>{
    return x*3;
}

// Arrow function com retorno implícito
quadrado = x => x*4;

console.log(dobro(5));
console.log(triplo(5));
console.log(quadrado(5));

//Arrow com this fixio 
function Pessoa(){
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    },1000);
}

new Pessoa;


  