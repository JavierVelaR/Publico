var modo = leerModoActual();

if(modo=="dia"){
    ponerDia();
}else{
    ponerNoche();
}

function leerModoActual(){
    let modo = window.localStorage.getItem("modoGuardado");
    if(!modo){
        modo = "dia";
    }

    return modo;

}

function ponerDia(){
    window.localStorage.setItem("modoGuardado", "dia");
    document.body.backgroundColor="salmon";
    
    let iconoDia = getElementById("dia");
    iconoDia.style.display = "none";
    
    let iconoNoche = getElementById("noche");
    iconoNoche.style.display = "block";
}

function ponerNoche(){
    window.localStorage.setItem("modoGuardado", "noche");
    document.body.backgroundColor="black";

    let iconoDia = getElementById("dia");
    iconoDia.style.display = "block";
    
    let iconoNoche = getElementById("noche");
    iconoNoche.style.display = "none";
}

function cambiarModo(){
    if(modo=="dia"){
        ponerNoche();
    }else{
        ponerDia();
    }
}

function cambiarTema(id){
    let boton = document.getElementById(id);
    let colorAnterior = boton.backgroundColor
    let colorSiguiente;

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