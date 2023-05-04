function info(){
    alert("Javier Vela Rivera, 1ºDAM, No lo sé aún");
}

function cambiarTema(id){
    let boton = document.getElementById(id);

    if(document.body.style.backgroundColor == "white"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        boton.innerText = "☼";
        boton.style.color = "white";
        boton.style.backgroundColor = "black";
        boton.style.borderColor = "white";
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        boton.innerText = "☾";
        boton.style.color = "black";
        boton.style.backgroundColor = "white";
        boton.style.borderColor = "black";
    }
}