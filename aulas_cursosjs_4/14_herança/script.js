class Brasileiro {
    constructor(pernas){
        this.pernas = pernas;
    }
}
let felipe = new Brasileiro(4);

console.log(felipe.pernas);

class Argentino extends Brasileiro {
    constructor(pernas, nome){
        super(pernas, pernas);
        this.nome = nome;
    }


gritar(){
    console.log("AGAGASGA");
}
}
 let messi = new Argentino(2, 'Lionel Messi');

 console.log(messi);
 console.log(messi.pernas);

 messi.gritar();