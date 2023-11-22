class Jogador {
    constructor(jogos, gols, assistencias, nacionalidade){
        this.jogos = jogos;
        this.gols = gols;
        this.assistencias = assistencias;
        this.nacionalidade = nacionalidade;

    }

    gritar(){
        console.log('AAAAAH');
    }
}
Jogador.prototype.nacionalidade = 'SNF';

let pernas = Symbol();

Jogador.prototype[pernas] = 2;

let  endrick = new Jogador(40, 23, 11, 'Brasileiro');


console.log(endrick.jogos); 

endrick.gritar();

console.log(Jogador.prototype.nacionalidade);

//acessando symbol
console.log(Jogador.prototype[pernas]);
console.log(endrick[pernas]);