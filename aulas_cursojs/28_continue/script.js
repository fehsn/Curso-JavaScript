for(let num = 0; num < 15; num = num + 1){
    if(num % 2 == 0){
        console.log("O número é par, caiu no continue");
        continue;
    }
    console.log(num);
}