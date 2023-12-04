const nomeUsuario = /^(?=.{3,16}$)[a-z0-9_]/;

console.log(nomeUsuario.test("felipe_1234"));
console.log(nomeUsuario.test("felipe_14"));
console.log(nomeUsuario.test("felipe_"));
console.log(nomeUsuario.test("_1234"));
console.log(nomeUsuario.test("asdasd"));
console.log(nomeUsuario.test("12313123131321"));
console.log(nomeUsuario.test("__"));
