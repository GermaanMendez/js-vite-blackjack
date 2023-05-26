import Swal from 'sweetalert2'

/**
 * Esta funcion recibe el array de puntos que tiene los puntos FINALES de todos los jugadores
 * @param {Array<Number>}puntosJugadores Array donde cada posicion representa el acumulado de puntos de cada jugador. ej puntosJugadores[0] tiene la suma final de todos los puntos que obtuvo el jugador de la poscion 0 
* return en base al ARRAY FINAL DE PUNTOS determina el ganador 
*/
export const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores; //creo un nuevo array que tiene 2 elementos. puntosMinimos(pntosJugador) y puntosComputadora esto es porque en nuestro sistema solo juegan 2 jugadores por lo tanto el array de puntos solo tendra 2 jugadores y puedo separarlos de esta forma
    setTimeout(() => { //este timeout es simplemente para que primero se muestre la carta y luego el alert

        if (puntosComputadora === puntosMinimos) { //si la pc obtiene los mismos puntos que el jugador empate
           Swal.fire('Quien gano?','Nadie, no le pudiste ganar a una pc...','question')
        } else if (puntosMinimos > 21 || puntosComputadora > puntosJugadores[0] && puntosComputadora <= 21) {//variables donde el jugador pierde
          Swal.fire({icon: 'error',title: 'JAJA, Perdiste...',text: '',footer: '<a href=""></a>'})
        } else if (puntosComputadora > 21) {//variable donde gana el jugador
          Swal.fire('¡Ganaste loco!', ' ' ,'success');
        }
    }, 1);
}

export default determinarGanador