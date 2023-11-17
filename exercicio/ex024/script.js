function contagemRegressiva(num){
    while(num >= 0){
        num = num - 1;
        if(num % 2 == 0){
            console.log(`O número ${num} agora é par`)
        } else {
            continue
        }
    }
}

contagemRegressiva(10);
contagemRegressiva(21);


// OU//

function imprimePar(num){
    for(let i = num; i >=0; i--){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}


imprimePar(15);
imprimePar(883);
imprimePar(48);