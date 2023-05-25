

/**
 * 
 * @param {Array<String>} deck es un arreglo de strings
 * @returns {String} Retorna una carta
 */
//funcion que permite tomar una carta
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        alert('No hay mas cartas')
        throw new Error('No hay mas cartas en el deck')
    }
    return deck.pop();//El .pop() Elimina la ultima carta y la retorna, gracias a que la baraja ya esta previamente desordenada siempre eliminare y obtendre una carta random en cada partida nueva
}
  
export default pedirCarta