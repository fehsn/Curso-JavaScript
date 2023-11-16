function multiplicar(n1, n2=1){
    c = n1 * n2;
    console.log(c);
}

multiplicar(6,10);
multiplicar(6);

function potencia(base, exp=2){
    return Math.pow(base, exp);
}

console.log(potencia(2));
console.log(potencia(2,2));
console.log(potencia(2,3));
