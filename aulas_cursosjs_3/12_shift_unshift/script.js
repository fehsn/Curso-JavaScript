let carros = ['BMW', "Audi", "VW", "Fiat"];

let removePrimeiroCarro = carros.shift();

console.log(removePrimeiroCarro);
console.log(carros);

carros.unshift("Gurgel");

console.log(carros);
console.log(carros[0]);