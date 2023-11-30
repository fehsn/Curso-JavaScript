const pontoRegex = /./;
console.log(pontoRegex.test('asda'));
console.log(pontoRegex.test(' '));
console.log(pontoRegex.test('123123'));
console.log(pontoRegex.test('asda1312'));

const dRegex = /d/ ; //0-9

console.log(dRegex.test('asdas'));
console.log(dRegex.test(' '));
console.log(dRegex.test('1231'));
console.log(dRegex.test('asd123123'));

const dRegex2 = /\D/; // [^0-9]

console.log(dRegex.test('asdas'));
console.log(dRegex.test(' '));
console.log(dRegex.test('1231'));
console.log(dRegex.test('asd123123'));

const sRegex = /\s/; 

console.log(dRegex.test('asdas'));
console.log(dRegex.test(' '));
console.log(dRegex.test('1231'));
console.log(dRegex.test('asd123123'));

const wRegex = /\w/; 

console.log(dRegex.test('asdas'));
console.log(dRegex.test(' '));
console.log(dRegex.test('1231'));
console.log(dRegex.test('asd123123'));