let cnh= true;
let idade= prompt("Qual sua idade?");

if(idade>=18 && cnh==false){
    console.log("Não pode dirigir, precisa tirar CNH");
} else if(idade>=18 && cnh==true){
    console.log("Pode dirigir sim");
} else{
    console.log("VAI CRESCER PARA DIRIGIR")
}