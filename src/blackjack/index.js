import _ from 'underscore'; //importacion de elementos necesarios
import { crearDeck, pedirCarta, determinarGanador,turnoComputadora, acumularPuntosJugadores,crearCarta} from './CasosDeUso/index'


//funcion anonima autoEjecutable se ejecuta al inicio y encierra todo mi codigo.al ser anonima no es posible acceder a dicha funcion desde la consola
//por lo tanto no puedo acceder ni a la funcion ni a nignuno de los elementos que esten dentro de dicha funcion esto lo hago para que mi codigo no sea vulnerable y manipulable desde la consola.
const miModulo=(() => {
  'use strict' //me ayuda a detectar errores 
//carga la ventana
    window.addEventListener('load', inicio);

function inicio() {  //obtengo desde html botones que ejecutan funciones
  const btnPedirCarta = document.querySelector('#btnPedirCarta'),
      btnNuevoJuego = document.querySelector('#btnNuevoJuego'),
      btnDetenerJuego = document.querySelector('#btnDetenerJuego'),
      btnModoOscuro = document.querySelector('#btnModoOscuro'),
      btnModoClaro = document.querySelector('#btnModoClaro');
  
        //eventos botones
        btnDetenerJuego.addEventListener('click',detenerJuego)
        btnPedirCarta.addEventListener('click', comenzarJuego)
        btnNuevoJuego.addEventListener('click', nuevoJuego)
        btnModoOscuro.addEventListener('click', modoOscuro)
        btnModoClaro.addEventListener('click', modoClaro)
    }

//constantes y let globales
let       deck   = []; // baraja de cartas
const    tipos   = ['C', 'D', 'H', 'S'], //tipos de cartas
    especiales   = ['A', 'J', 'Q', 'K']; //cartas especiales

  let puntosJugadores = []; //Este array sera donde guardare los puntos de todos los jugadores, cada posicion en este array representa los puntos 
                            //acumulados para un jugador.EJ puntosJugadores[0] en esta posocion se guarda el acumulado para el jugador 0
                             //y asi sucesivamente como tantos jughadores tenga(2)

deck=crearDeck( tipos,especiales);   //creacion del deck mediante funcion importada
const divCartasJugadores = document.querySelectorAll('.divCartas'), //Este array guarda todos los divCartas que encuentre en el html ya que para jugador quiero poder mostrarle las cartas que eligio. Por lo tanto necesito obtener todos los div de jugadores para luego sobreescribirlos desde aca en js
              puntosHTML = document.querySelectorAll('small');//smalls que estan en el HTML donde se muestran los puntos, los selecciono a todos en un array para poder sobreescribirlos segun el jugador que tenga el turno y deben acumularse sus puntos

/**
 * Esta funcion se encarga de iniciar el juego, se ejecuta al click del boton nuevoJuego, crea tantos divs y posiciones en el array de puntos como puntos reciba
 * @param {number} numJugadores 
 */
const inicializarJuego = (numJugadores = 2) => {
    puntosJugadores = [];
    //Crea tantas posiciones en el array de puntos como jugadores reciba por parametro ya que si tengo 2 jugadores quiero tener 2 almacenadores uno para cada jugador
    for (let i = 0; i < numJugadores; i++){
        puntosJugadores.push(0);
    }
    btnPedirCarta.style.display = 'inline-block'; btnDetenerJuego.style.display = 'inline-block'; btnPedirCarta.disabled = false; btnDetenerJuego.disabled = false;
  //crea de forma dinamica los divs que almacenaran las cartas de los jugadores, creara tantos divs como jugadores hayan 
  for (let i = 0; i < puntosJugadores.length; i++){
        divCartasJugadores[i].innerHTML = "";
        puntosHTML[i].innerHTML = 0;
    }
  }
  
//funcion que da comienzo a la partida, se ejecuta con el boton pedir carta
const comenzarJuego = () => {
  let carta = pedirCarta(deck) // se obtiene la carta pedida por el juador mediante funcion importada
  const puntosJugador = acumularPuntosJugadores(puntosJugadores,puntosHTML,carta,0)//Paso array de puntos, array de small, carta y turno. De esta forma la funcion puede obtener el valor de la carta y sumarlo en el array de puntos y sobreEscribir el small en la posicion 0 ya que corresponde a un jugador real
  crearCarta(divCartasJugadores,carta,0)//Paso array de divs, carta y turno.
  if (puntosJugador >= 21) {//El jugador sigue pidiendo cartas y cuando su puntaje sea >=21 ejecuto la funcion pasandole el puntaje
      btnPedirCarta.disabled = true;
      btnDetenerJuego.disabled = true;  //paso array div, array de puntos, array de smalls, puntos minimos para que gane la PC y deck para que la pc pueda obtener sus cartas
      turnoComputadora(divCartasJugadores,puntosJugadores,puntosHTML,puntosJugador,deck);
  }     
}

 
  
   
  


//funcion que se ejecuta con el boton de detener
const detenerJuego = () => {
  btnPedirCarta.disabled = true;//se deshabilitan los puntos
  btnDetenerJuego.disabled = true;
  turnoComputadora(divCartasJugadores,puntosJugadores,puntosHTML,puntosJugadores[0],deck)//como el jugador se detuvo o sea no llego a Pts>=21 y pidio detener. Ejecuto el turno de la pc pasandole los puntos actuales del jugador que seguro seran <21
}


//funcion que se ejcuta con el boton de nuevo juego
const nuevoJuego = () => { //vuelvo a habilitar botones, reseteo puntos, borro imagenes y creo la baraja nuevamente
  inicializarJuego();
}



  const modoClaro = () => {
    let divJuego = document.querySelector('.gameContainer')
    divJuego.classList.remove('estilosModoOscuro');
    divJuego.classList.add('estilosModoClaro');
    btnModoClaro.style.display = 'none'
    btnModoOscuro.style.display = 'inline-block'
}
  const modoOscuro = () => {
    let divJuego = document.querySelector('.gameContainer')
    divJuego.classList.remove('estilosModoClaro');
    divJuego.classList.add('estilosModoOscuro');
    btnModoClaro.style.display = 'inline-block'
    btnModoOscuro.style.display = 'none'
  }


//este encapsulamiento siempre tiene un return donde retornare, hare publico lo que sea necesario
//lo puedo renombrar para que sea publico con otro nombre
  return {
      nuevoJuego:inicializarJuego
  };
})();













