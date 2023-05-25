  import obtenerValor from "./obtener-valor";
  
  //turno: 0 = primer jugador, y el utlimo sera la computadora
  export const acumularPuntosJugadores=(puntosJugadores,puntosHTML,carta,turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + obtenerValor(carta);// se obtiene el valor de la carta recibida por el jugador
    puntosHTML[turno].innerHTML = puntosJugadores[turno];
    return puntosJugadores[turno];
}   
  export default acumularPuntosJugadores