import Swal from 'sweetalert2'
export const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => { //este timeout es simplemente para que primero se muestre la carta y luego el alert

        if (puntosComputadora === puntosMinimos) { //si la pc obtiene los mismos puntos que el jugador empate
           Swal.fire('Quien gano?','Nadie, no le pudiste ganar a una pc...','question')
        } else if (puntosMinimos > 21 || puntosComputadora > puntosJugadores[0] && puntosComputadora <= 21) {//variables donde el jugador pierde
          Swal.fire({icon: 'error',title: 'JAJA, Perdiste...',text: '',footer: '<a href=""></a>'})
        } else if (puntosComputadora > 21) {//variable donde gana el jugador
          Swal.fire('¡Ganaste loco!', ' ' ,'success');
        }
    }, 30);
}

export default determinarGanador