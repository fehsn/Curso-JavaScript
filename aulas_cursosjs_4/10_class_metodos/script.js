class Jogador {
    constructor(jogos, gols, assistencias){
        this.jogos = jogos;
        this.gols = gols;
        this.assistencias = assistencias;
    }

    gritar(){
        console.log('AAAAAH');
    }
}

Jogador.prototype.pernas = 2;

let  endrick = new Jogador(40, 23, 11);
console.log(endrick.pernas);
console.log(endrick.jogos); 
endrick.gritar();