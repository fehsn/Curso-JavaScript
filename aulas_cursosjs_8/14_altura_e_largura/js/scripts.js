let elemento = document.querySelector("#titulo-principal");

console.log(elemento.offsetWidth);//considera as bordas
console.log(elemento.offsethight);

console.log('largura' + elemento.clientWidth);//não considera as bordas
console.log('altura: ' + elemento.clientHeight);