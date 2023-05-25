

export const crearCarta = (divCartasJugadores,carta, turno) => {
    const imgCarta = document.createElement('img')//
    imgCarta.src = `assets//cartas/${carta}.png`;//
    imgCarta.classList.add('carta')//
    divCartasJugadores[turno].append(imgCarta)//
} 
export default crearCarta