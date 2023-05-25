import _ from 'underscore';
//necesito exportar esta funcion para que los demas archivos js puedan accederlo
//puedo hacer la exportacion individual que se hace poniendo export antes del elemento a exportar

///esto es JSDoc  para comentar de mejor forma mis funciones, al pararme sobre la funcion desde donde
// la llame puedo saber el tipo de dato que recibe por parametro y lo que retorna
/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta  Ejemplo:  ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales  Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    
    if (!tiposDeCarta || !tiposEspeciales || tiposDeCarta.length ===0) throw new Error('TiposDeCarta y tipos especiales son obligatorios y no pueden ser arrays vacios');
    let deck = [];
    let inicio = 2; let fin = 10; // de 2 a 10 xq las cartas en blackJack van de 2 a 10
    for (inicio; inicio <= fin; inicio++){
        for (let tipo of tiposDeCarta) {
            deck.push(inicio + tipo);
        }
    }
    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
     //_.shuffle ordena de manera random el array, este metodo pertenece a underScore, cada vez que se cargue mi pagina y se cree la baraja se creara de manera aleatoria
    return _.shuffle(deck);
}
//si quiero hacer la exportacion por defecto utilizo esto
export default crearDeck;