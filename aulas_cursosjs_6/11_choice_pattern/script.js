const jog = /\w+: (Ronaldo|Messi|Neymar)/;

console.log(reg.test("Jogador : Ronaldo"));
console.log(reg.test("Jogador: Messi"));
console.log(reg.test("Jogador: Ronaldinho "));