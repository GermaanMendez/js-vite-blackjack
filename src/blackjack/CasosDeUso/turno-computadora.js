import pedirCarta from "./pedir-carta";
import acumularPuntosJugadores from "./acumular-puntos";
import crearCarta from "./crear-carta";
import determinarGanador from "./determinar-Ganador";


/**
 * 
 * @param {Number} puntosMinimos que necesita la computadora para ganar 
 * @param {Array<String>} deck 
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

