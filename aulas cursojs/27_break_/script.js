let nome= "Felipe";
for(let i = 0; i < 10; i = i + 1){

    if(i ==3){
        nome= "Terceiro"
    }

    if (i ==5 && nome == "terceiro"){
        console.log('O nome é terceiro, pode parar');
        break;
    }

    console.log(i);
}