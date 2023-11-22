class Cachorro {
    constructor(nome, idade, posicao , time){
        this.nome = nome;
        this.idade = idade;
        this.posicao = posicao;
        this.time = time;
    }
}

Jogador.prototype.coracao.function();{
    console.log(`Meu time de coração é o ${this.time}`);
}

let hulk = new Jogador('Givanildo Vieira de Sousa', 34, 'ATACANTE', 'Atlético MG');
hulk.coracao();
console.log(hulk.nome);
console.log(hulk.idade);
console.log(hulk.posicao);
console.log(hulk.time);