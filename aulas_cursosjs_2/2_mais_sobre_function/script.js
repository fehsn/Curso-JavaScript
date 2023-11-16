function multiplicarTresNumeros(x,y,z){
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(5,4,8);

console.log("O valor de mul é " + mult);

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("pode dirigir");
    } else {
        console.log("Nâo pode dirigir");
    }
}

console.log(podeDirigir(18, true));
console.log(podeDirigir(25, false));
console.log(podeDirigir(22, true));
console.log(podeDirigir(26, 1));
console.log(podeDirigir(12, 0));
