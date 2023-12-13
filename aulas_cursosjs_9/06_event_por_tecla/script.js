window.addEventListener("keydown", function(e){

    if(e.key == 'q'){
        alert("Apertou a letra Q");
    } else if(e.key == "Enter"){
        console.log("Apertou enter");
    }
});

window.addEventListener("keyup", function(e){

    if(e.key = "Enter"){
        console.log("soltou o enter");
    }
});