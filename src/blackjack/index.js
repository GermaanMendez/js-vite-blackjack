
import _ from 'underscore';
import { crearDeck, pedirCarta, determinarGanador,turnoComputadora, acumularPuntosJugadores,crearCarta} from './CasosDeUso/index'


//esta funcion anonima autoEjecutable se ejecuta al inicio, al ser anonima(sin nombre) no es posible acceder a dicha funcion desde la consola
//por lo tanto no puedo acceder ni a la funcion ni a nignuno de los elementos que esten dentro de dicha funcion
//esto lo hago para que mi codigo no sea vulnerable y manipulable desde la consola. Por eso lo pongo al inicio embebiendo todo mi codigo y es lo primero que se ejcuta de manera automicatica
//el 'use strict' es algo que debo poner siempre ya que declara que el codigo se ejecuta de modo estricto lo cual me ayuda a encontrar erroes 
const miModulo=(() => {
  'use strict'

//carga la ventana
    window.addEventListener('load', inicio);

function inicio() {  //obtengo desde html botones que ejecutan funciones
  const btnPedirCarta = document.querySelector('#btnPedirCarta'),
        btnNuevoJuego = document.querySelector('#btnNuevoJuego'),
        btnDetenerJuego = document.querySelector('#btnDetenerJuego'),
        btnPruebaJs = document.querySelector('#btnPruebaJs'),
        btnModoOscuro = document.querySelector('#btnModoOscuro'),
        btnModoClaro = document.querySelector('#btnModoClaro');

        //eventos botones
        btnDetenerJuego.addEventListener('click',detenerJuego)
        btnPedirCarta.addEventListener('click', comenzarJuego)
        btnNuevoJuego.addEventListener('click', nuevoJuego)
        btnPruebaJs.addEventListener('click', pruebaJs)
        btnModoOscuro.addEventListener('click', modoOscuro)
        btnModoClaro.addEventListener('click', modoClaro)
    }
    btnPedirCarta.style.display = 'none';
    btnDetenerJuego.style.display = 'none';
//constantes y let globales
let       deck   = []; // baraja de cartas
const    tipos   = ['C', 'D', 'H', 'S'], //tipos de cartas
    especiales   = ['A', 'J', 'Q', 'K']; //cartas especiales

let puntosJugadores = [];

deck=crearDeck( tipos,especiales);   
const divCartasJugadores = document.querySelectorAll('.divCartas'),
              puntosHTML = document.querySelectorAll('small');//smalls que estan en el HTML donde se muestran los puntos



    
const inicializarJuego = (numJugadores = 2) => {
    puntosJugadores = [];
    deck = crearDeck(tipos,especiales);//se cera la baraja usando la funcion
    for (let i = 0; i < numJugadores; i++){
        puntosJugadores.push(0);
    }
    btnPedirCarta.style.display = 'inline-block';
    btnDetenerJuego.style.display = 'inline-block';
    btnPedirCarta.disabled = false;
    btnDetenerJuego.disabled = false;
    for (let i=0; i< puntosJugadores.length; i++){
        divCartasJugadores[i].innerHTML = "";
        puntosHTML[i].innerHTML = 0;
    }
}
//funcion que da comienzo al juego, se ejecuta con el boton pedir carta
const comenzarJuego = () => {
  let carta = pedirCarta(deck) // se obtiene la carta pedida por el juador
  const puntosJugador = acumularPuntosJugadores(puntosJugadores,puntosHTML,carta,0)//paso 0 xq es la posicion del jugador
  crearCarta(divCartasJugadores,carta,0)
  if (puntosJugador >= 21) {//El jugador sigue pidiendo cartas y cuando su puntaje sea >=21 ejecuto la funcion pasandole el puntaje
      btnPedirCarta.disabled = true;
      btnDetenerJuego.disabled = true;
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



//esto es la prueba del boton crear html desde js

//si quisiera que no se agregue en caso de ya existir saco los elementos creados
let h3 = document.createElement('h3'); //al sacarlos los dejo como variables globales
const pruebaJs = () => {
  document.querySelector('.mensajeInicioJuego').innerHTML = ''
 // let h3 = document.createElement('h3');
  if(h3.textContent==''){
  h3.className = 'PruebaCrearDesdeJs'
  h3.innerHTML = 'h3 creado desde js'
  let input = document.createElement('input');
  input.className = 'PruebaCrearDesdeJs'
  input.placeholder = 'Escriba aquí'
  let button = document.createElement('button');
  button.textContent = 'Subir'
  button.className='PruebaCrearDesdeJsButton'
  let divBotones = document.querySelector('#divBotones');
  divBotones.append(h3, input, button)
  }
}
btnModoOscuro.style.display = 'none'
const modoClaro = () => {
    let body = document.querySelector('body')
    let html = document.querySelector('html')
    let tiulo = document.querySelector('header')
    tiulo.classList.add('tituloModoClaro')
    body.className = 'estilosModoClaro'
    html.className = 'estilosModoClaro'
    btnModoClaro.style.display = 'none'
    btnModoOscuro.style.display = 'inline-block'
}
const modoOscuro = () => {
    let body = document.querySelector('body')
    let html = document.querySelector('html')
    let tiulo = document.querySelector('header')
    tiulo.className='titulo'
    body.className = ''
    html.className = ''
    btnModoOscuro.style.display = 'none'
    btnModoClaro.style.display='inline-block'
}


//este encapsulamiento siempre tiene un return donde retornare, hare publico lo que sea necesario
//lo puedo renombrar para que sea publico con otro nombre
  return {
      nuevoJuego:inicializarJuego
  };
})();













