function criarJogador(nome, posicao, idade, time){
    let jogador = Object.create({});
    jogador.nome = nome;
    jogador.posicao = posicao;
    jogador.idade = idade;
    jogador.time = time;
    jogador.timecoracao = function(){
        console.log('Meu time do coração é o Corinthians com toda certeza ;)');
    }
    return jogador;
}

let felipe = criarJogador('Felipe de Souza Nunes','Meia', 22, 'Corinthians');

console.log(felipe.time);
console.log(felipe.idade);
console.log(felipe.posicao);
console.log(felipe.nome);
felipe.timecoracao();