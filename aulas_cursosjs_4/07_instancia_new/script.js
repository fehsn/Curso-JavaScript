function Jogador(nome, idade, posicao, time){
    this.nome = nome;
    this.idade = idade;
    this.posicao = posicao;
    this.time = time;
    this.coracao = function(){
        console.log('Meu time do coração é o ' + this.time);
    }
}

let paulinho = new Jogador('Paulinho', 22, 'Atacante', 'Atlético MG');
paulinho.coracao();