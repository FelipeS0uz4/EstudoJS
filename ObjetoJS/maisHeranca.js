// Cadeia de protótipos (prototype chain) com create
const pai = { nome: 'Pedro', corCabelo: 'preto'};
const filha1 = Object.create(pai);
filha1.nome = 'Ana';
console.log(filha1.corCabelo);
const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
});
console.log(filha2.nome);
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`);
}

// instaciando o obejto pela função construtora

function MeuObjeto(){}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;
console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);
MeuObjeto.prototype.nome = 'Anonimo'; // adicionando atributo ao protótipo
MeuObjeto.prototype.falar = function(){ // adicionando método ao protótipo
    console.log(`Bom dia! Meu nome é ${this.nome}`);
}
obj1.falar();
obj2.nome = 'Rafael'; // sobrescrevendo o atributo nome do protótipo
obj2.falar();

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype; // mudando o protótipo do objeto obj3
obj3.nome = 'Obj3';
obj3.falar();   

// Resumo da cadeia de protótipos
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);// explicando a cadeia de protótipos
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);