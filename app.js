
let numeroSecreto = 0;
let numeroMaximo = 10;
let intentos = 0;
let maximosIntentos= 3;
let listaNumeroSorteados = [];

//console.log(numeroSecreto);


// esta función tiene como finalidad cambiar el texto de los elementos HTML, que le asignemos dentro del document.querySelector()
function asignarTextoElemento(elemento,texto){
    let elemtoHTML = document.querySelector(elemento);
elemtoHTML.innerHTML = texto;
}

// cuando clickeamos en el boton intentar, compare el número que elegimos con el número aleatorio que eligio el programa.
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);    
   
//si el usuario acierta.
    if (intentos > maximosIntentos){
        asignarTextoElemento("p", "Ups!!!, ya no tenes mas intentos");
    }
    else{ if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ("p", `Acertaste el número secreto en  ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
        document.getElementById("reiniciar").removeAttribute("disabled");// habilita el botón de nuevo juego una vez acertado el número secrteto.
        //si el usuario no acierta.
    } else {
        if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento("p", "El número secreto mayor.");
        } else{
            asignarTextoElemento("p", "el número secreto es menor.");
        } 
        intentos++;    
        limpiarCampos();      
    } 

    }
   
    return;    
}   

//limpia el input. 
 function limpiarCampos() {
    document.querySelector("#valorUsuario").value="";    
 }

 //generar número aleatorio.
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    // si el número generado , esta en la lista, hacemos una acción si no hacemos otra.
           
    if (listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Upps!!!! ya no hay más números, jejeje...");

    } else{
        if(listaNumeroSorteados.includes(numeroGenerado)){
            //recursividad.
            return generarNumeroSecreto();
        } else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
    
}

// retornar todos los parametros a condiones iniciales del juego.

function condicionesIniciales () {
    asignarTextoElemento("title", "Bienvenido al número Secreto!!!");
    asignarTextoElemento("h1", "Juego del número secreto!!!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}` );
    limpiarCampos(); 
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    
}

// una vez acertado el número secreto clickeando en el botón volver a jugar, se retorna el juego al estado inicial.

function reiniciarJuego(){  
    limpiarCampos();
    condicionesIniciales();        
}

condicionesIniciales();

//clase de arreglos o arrays.



