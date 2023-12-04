const cep = /\d{5}-\d{3}/;

console.log(cep.test('03267-090'));
console.log(cep.test('asdasd'));
console.log(cep.test('03267-0'));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test('(11)94112-7107'));
console.log(tel.test("(64)91234-1231"));