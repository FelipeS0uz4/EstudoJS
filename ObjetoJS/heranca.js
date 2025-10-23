const ferrari = {
    modelo: 'F40',
    velMax: 324
}   

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__);
console.log(volvo.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype)

// Cadeia de protótipos (prototype chain)
console.log('Cadeia de protótipos');
const avo = {attributo1: 'A'}
const pai = {__proto__: avo, attributo2: 'B'}
const filho = {__proto__: pai, attributo3: 'C'}
console.log(filho.attributo1);
console.log(filho.attributo2);
console.log(filho.attributo3);
console.log(filho.attributo0);

//voltando para o carro

const carro={
    velAtual: 0,
    velMax: 200,
    acelerarMAis(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    }
    ,status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari1 = {
    modelo: 'F40',
    velMax: 324 //shadowing sobrepõe o atributo do protótipo
}

const volvo1 = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` //usando o super para chamar o método do protótipo
    }
}

Object.setPrototypeOf(ferrari1, carro) //setando o protótipo do objeto ferrari1 para carro
Object.setPrototypeOf(volvo1, carro) //setando o protótipo do objeto volvo1 para carro

console.log(ferrari1);
console.log(volvo1);

volvo1.acelerarMAis(100) //usando o método do protótipo
console.log(volvo1.status());
 
ferrari1.acelerarMAis(300)
console.log(ferrari1.status());