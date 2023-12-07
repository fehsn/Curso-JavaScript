let p = Promise.resolve(new Error("Nâo deu certo"));

console.log("lalalalala");

p.then((value) => console.log(value))
.catch(reason => console.log("Falhou" + reason));