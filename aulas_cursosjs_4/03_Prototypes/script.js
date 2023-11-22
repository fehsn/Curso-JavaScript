const pessoa = {
    maos : 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeTypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));