let pessoa = {
    "nome" : "Felipe",
    "idade" : 28,
    "profissao" : "Programador",
    "hobbies": ["Futebol", "Video game", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);


let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);
console.log(pessoaJSON.hobbies[0]);