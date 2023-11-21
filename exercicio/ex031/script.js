let array1 = [1,2,3,4,5,6,7,8,9,10];
let array2 = [1,2,3,];

function verificarTamanho(i){
    if(i.length >= 5) {
        console.log('Muitos elementos');
    } else {
        console.log('Poucos elementos');
    }
}


verificarTamanho(array1);
verificarTamanho(array2);