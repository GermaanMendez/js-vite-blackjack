  import obtenerValor from "./obtener-valor";
  

  //turno: 0 = primer jugador, y el utlimo sera la computadora
  /**
   * Recibe array de puntos, array de small, carta y turno. Obtiene valor de carta, suma y sobreEscribe puntos y small para el jugador correspondiente en base al turno
   * @param {Array<Number>} puntosJugadores array donde en cada posicion acumulo los puntos. Ej 2 jugadores 2 posiciones en cada una sumo los puntos de cada jugador 
   * @param {Array} puntosHTML array de todos los small de mi html, esto es porque en cada small es donde muestro los puntos para cada uno de los jugadores
   * @param {String} Carta obtenida por el usuario de la cual se quiere sumar sus puntos 
   * @param {Number} turno, en mi app el jugador siempre es 0 y la computadora siempre la ultima posicion del array 
   * @returns retorna el acumulado de puntos para el jugador que tiene el turno
   */
export const acumularPuntosJugadores = (puntosJugadores, puntosHTML, carta, turno) => {
    //Sumo los puntos del jugador que tiene el turno llamando a la funcion pasandole la carta
    puntosJugadores[turno] = puntosJugadores[turno] + obtenerValor(carta);
    //sobreescribo el small del html con los puntos ya sumados del jugador
    puntosHTML[turno].innerHTML = puntosJugadores[turno];
    return puntosJugadores[turno]; //retorno los puntos ya sumados
}   
  export default acumularPuntosJugadores