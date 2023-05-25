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


// Almacenar el nombre en el almacenamiento local (persistente hasta que se cierre la pestaña o se borren los datos)
function guardarDatos() {
    let email = document.getElementById('campoEmail').value;
    localStorage.setItem('email',email);

    let nombre = document.getElementById('campoUsuario').value;
    localStorage.setItem('nombre', nombre);
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
    let nombre = localStorage.getItem('nombre');
    if (nombre) {
      document.getElementById('nombreUsuario').textContent = nombre;
    }else{
        document.getElementById('nombreUsuario').textContent = "Sin identificar";

    }
  });

  //Borrar el nombre cuando se cierre la pestaña
  window.addEventListener('close', function() {
    this.localStorage.removeItem('nombre');
  });

  
  
