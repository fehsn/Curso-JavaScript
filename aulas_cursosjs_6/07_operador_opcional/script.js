const padrao = /Ronald?o/;

console.log(padrao.test("Ronaldo"));
console.log(padrao.test("Ronalo"));

const padrao2 = /\d+\w?/;

console.log(padrao2.test("123"));
console.log(padrao2.test("12313jdkasd"));
console.log(padrao2.test("123  "));