function checarNumero(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        alert("Por favor, digite apenas números");
    } else  {
        return number;
    }
}

checarNumero(5);
checarNumero('sadh');

let number = prompt('Digite um número');
checarNumero(number);