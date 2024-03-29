var modo = leerModoActual();
console.log("Último modo guardado: ",modo);

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
    let todo = document.getElementById("todo");
    todo.style.color="black";
    todo.style.backgroundColor="rgb(238, 200, 154)";
    
    window.localStorage.setItem("modoGuardado", "dia");    
    
    let iconoDia = document.getElementById("dia");
   
    if(iconoDia){
        iconoDia.style.display = "none";
    }

    let iconoNoche = document.getElementById("noche");
    if(iconoNoche){
        iconoNoche.style.display = "block";
    }
}

function ponerNoche(){
    let todo = document.getElementById("todo");
    todo.style.color="black";
    todo.style.backgroundColor="grey";
    
    window.localStorage.setItem("modoGuardado", "noche");
    
    let iconoNoche = document.getElementById("noche");
    if(iconoNoche){
        iconoNoche.style.display = "none";
    }
    
    let iconoDia = document.getElementById("dia");
    if(iconoDia){
        iconoDia.style.display = "block";
    }
}


function cambiarTamanoFuente() {
    var selectElement = document.getElementById('tamFuente');
    var selectedValue = selectElement.value;
    var textoElement = document.getElementById('texto');
    textoElement.style.fontSize = selectedValue;

    document.getElementsByTagName(p).style.fontSize=selectedValue;
}

//Intento de hacer un menú flotante de cursores personalizados
/*function cambiarCursor(){
    var cursores = Array["./cursores/cursorRosa.png","./cursores/cursorAjolote.png",
    "./cursores/cursorAzul.png","./cursores/cursorZorro.png","./cursores/cursorAmarillo.png",
    "./cursores/cursorGris.png","./cursores/cursorNegro.png.png","./cursores/cursorBlanco.png"];
    let cursor = nextInt(prompt("Elige un cursor (0-Rosa,2-Azul,4-Amarillo,5-Gris,6-Negro):"));

    localStorage.setItem("--cursor",cursores[cursor]);

}*/


// Almacenar el nombre en el almacenamiento local (persistente hasta que se cierre la pestaña o se borren los datos)
function guardarDatos() {
    let email = document.getElementById('campoEmail').value;
    sessionStorage.setItem('email',email);

    let nombre = document.getElementById('campoUsuario').value;
    sessionStorage.setItem('nombre', nombre);
  }
  
  // Cambiar el valor del nombre en la esquina
  function cambiarDatos() {
    let email = document.getElementById('campoEmail').value;


    let nombre = document.getElementById('campoUsuario').value;
    document.getElementById('nombreUsuario').textContent = nombre;
    guardarDatos();
  }
  
  // Cargar el nombre desde el almacenamiento local cuando se cargue la página
  window.addEventListener('load', function() {
    let nombre = sessionStorage.getItem('nombre');
    if (nombre) {
      document.getElementById('nombreUsuario').textContent = nombre;
    }else{
        document.getElementById('nombreUsuario').textContent = "Sin identificar";

    }
  });

  //Borrar el nombre cuando se cierre la pestaña
  window.addEventListener('close', function() {
    this.sessionStorage.removeItem('nombre');
  });

  
  
