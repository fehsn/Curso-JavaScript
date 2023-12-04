const validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][1920-2020]{4}/;

console.log(validarDataNasc.test('14/02/2001'));
console.log(validarDataNasc.test('4/02/2001'));
console.log(validarDataNasc.test('14/2/2001'));
console.log(validarDataNasc.test('14/02/2'));
console.log(validarDataNasc.test('99/99/9999'));