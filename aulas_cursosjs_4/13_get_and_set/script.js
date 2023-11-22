class Jogador {
    constructor(nome, jogos, gols, assistencias){
        this.nome = nome;
        this.jogos = jogos;
        this.gols = gols;
        this.assistencias = assistencias;
    }
    apresentando(){
        console.log(`Meu nome é  ${this.name}`);
    }

    get getGols(){
        return this.gols;
    }

    set setGols(gols){
        this.gols = gols;
    }
}
let yalberto = new Jogador ('Yuri', 10, 0, 2);
yalberto.setGols = 4;
console.log(yalberto.getGols);
console.log(yalbereto.gols);