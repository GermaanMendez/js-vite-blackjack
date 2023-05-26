
/**
 * Funcion que recibe el div, la carta y turno. Para el jugador con el turno crea y muestra la imagen en el div correspondiente del html
 * @param {array} divCartasJugadores array de todos los divs del html donde se muestran las cartas para los jugadores 
 * @param {String} carta que quiero crear una etiqueta <img> y agregarla al div del jugador que pidio la carta, que tiene el turno
 * @param {number} turno del jugador, 0 siempre jugador real, ultima posicion del array de puntos siempre sera la pc
 */
export const crearCarta = (divCartasJugadores,carta, turno) => {
    const imgCarta = document.createElement('img')//crea carta <img>
    imgCarta.src = `assets//cartas/${carta}.png`;//agrega el src buscando en la carpeta de imagenes 
    imgCarta.classList.add('carta')//agrega clase de estilos a la imgane
    divCartasJugadores[turno].append(imgCarta)//agrega la imagen al div correspondiente
} 
export default crearCarta