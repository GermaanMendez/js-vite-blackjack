import pedirCarta from "./pedir-carta";
import acumularPuntosJugadores from "./acumular-puntos";
import crearCarta from "./crear-carta";
import determinarGanador from "./determinar-Ganador";


/**
 * Funcion que se encarga del tuno de la computadora. obtiene carta para la misma, muestra sus imgs cartas, acumula y muestra sus puntos en el html
 * @param {Array}divCartasJugadores Array de divs donde creare y mostrare las cartas para la computadora en este caso .
 * @param {Array<number>}puntosJugadores Array de puntos para poder acumular los puntos en este caso de la computadora que se guardan en la ultima posicion de este array
 * @param {Array}puntosHTML Array de smalls donde voy a sumar los puntos en este caso de la computadora que tambien estan en la ultima posicion de los small 
 * @param {number}puntosMinimos  que necesita superar la computadora para ganar, puntos minimos es igual a los puntos actuales del jugador al momento de que la pc tenga su turno 
 * @param {Array} deck de cartas. Es necesario para que la pc pueda obtener su carta 
 * return Retorna el ganador  ya que llama a la funcion determinarGanador pasandole el array de puntos final donde estan los acumulados finales para los 2 jugadores
 */

//turno de la computadora. Recibe un puntaje que será el del jugador
                                        //si no viene lo seteo como vacio por defecto
export const turnoComputadora = (divCartasJugadores,puntosJugadores,puntosHTML,puntosMinimos, deck=[]) => {
    if (!puntosMinimos) throw new Error('Puntos minimos son obligatorios')
    if(!deck) throw new Error('El deck es necesario')

    
    let puntosComputadora = 0;
 do {//doWhile se ejecuta si o si 1 vez y luego si sigue depende de la condicion
     const carta = pedirCarta(deck);//lo mismo que para el jugador
     puntosComputadora=acumularPuntosJugadores(puntosJugadores,puntosHTML,carta,puntosJugadores.length-1)//en mi logica la computadora SIEMPRE sera el ultimo jugador en el array de jugdores, por lo tanto paso la carta y como tuno la ultima posicion del array de jugaodores ya que corresponde a la PC
     crearCarta(divCartasJugadores,carta, puntosJugadores.length - 1)
     
    //mientras el PntsPC < PntsJug y el jugador no haya perdido se ejecuta el while
} while (puntosComputadora < puntosMinimos && (puntosMinimos <= 21));
    determinarGanador(puntosJugadores);
}

