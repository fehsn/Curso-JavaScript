const reg1 = new RegExp('bola');
console.log(reg1.test('tem bola?'));
console.log(reg1.test('Não tem'));

const reg2 = /bola/;
let text= "Tem sooooobola";
console.log(reg1.test('tem bola?'));
console.log(reg1.test('Não tem'));
console.log(reg2.test(text));

console.log(/quadrado/.test('Onde tem um quadrado'));
console.log(/quadrado/.teste('não tem'));