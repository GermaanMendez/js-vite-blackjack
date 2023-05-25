
/**
 * Obtener el valor de la carta
 * @param {string} carta 
 * @returns retorna el valor de la carta que recibe
 */
//funcion que obtiene el valor de la carta
export const obtenerValor = (carta) => {
    //substring me devuelve un subString del string original, este lo toma desde los indices que le pase
    //En este ejemplo las cartas son basicamente 2 caracteres ej:  8D,10H,AC,JH donde el primer caracter es el valor y el segundo el tipo
    const valor = carta.substring(0, carta.length - 1);
    // ? es if, : es sino. si se cumple que es isNaN llamo a la const valor para obtener el valor, este isNaN es para cuando ya se hayan pedidos todas las cartas y la carta sea un null no es isNaN
    //si el valor es igual a 'A' entonces es 11, sino es 10. Esto se debe a que las cartas van del 2 al 10 y J Q K valen 10 y A vale 11. 
    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1;
  }
  
export default obtenerValor