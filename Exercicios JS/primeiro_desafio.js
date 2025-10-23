impar = [];
par = [];
for (let i  = 1; i<11;++i){
    if(i%2!==0){
        impar.push(i);
    }
    else{
        par.push(i);
    };
};
console.log("Números ímpares: "+impar);
console.log("Números pares: "+par);

//com função callback
const impar2 = [];
const par2 = [];
const numeros = [1,2,3,4,5,6,7,8,9,10];        
numeros.forEach((n)=>{
    n%2!==0 ? impar2.push(n) : par2.push(n);
});
console.log("Números ímpares: "+impar2);
console.log("Números pares: "+par2);
