const enderecoIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(enderecoIP.test("123.2.2.1"));
console.log(enderecoIP.test("113.3.1.7"));
console.log(enderecoIP.test("123.2."));
console.log(enderecoIP.test(".2.1"));
console.log(enderecoIP.test("123.2."));

