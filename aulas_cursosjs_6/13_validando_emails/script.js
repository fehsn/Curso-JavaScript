const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("felipesouza@gmail.com"));
console.log(validarEmail.test("felipesouzagmailcom"));
console.log(validarEmail.test("gmail.com"));