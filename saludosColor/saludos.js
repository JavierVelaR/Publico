'use strict';

var colorTexto = "white";
var anteriorColorTexto = null;

const colors = new Array("lightgreen", "pink", "red", "orange");
colors.push("magenta");
colors.push("whitesmoke");

function pintar() {
    for (let i = 0; i < 5; i++) {
        let id = "c" + (i + 1);
        let cf = colors[i];
        rellenar(id, cf);
    }

}

function rellenar(id, colorFondo) {
    let elem = document.getElementById(id);
    elem.style.backgroundColor = colorFondo;
}

function saludar(id) {
    let elem = document.getElementById(id);
    if(anteriorColorTexto!=colorTexto){
        elem.style.color = colorTexto;
    }else{
        elem.style.color = colors[5];
    }
    
    elem.innerHTML = "Hola";
    anteriorColorTexto = colorTexto;
    colorTexto = getComputedStyle(elem).backgroundColor;
}

pintar();

alert("Javier Vela Rivera, 1ºDAM, No lo tengo claro aún.")