"use strict";
/**
 * Calculates the area of a rectangle given its width and height.
 *
 * @param {number} largura - The width of the rectangle.
 * @param {number} altura - The height of the rectangle.
 * @return {number} The calculated area of the rectangle.
 */
function calculaArea(largura, altura) {
    return largura * altura;
}
const calculaArea2 = (largura, altura) => largura * altura;
function somar(...numeros) {
    return numeros.reduce((total, proximo) => total + proximo, 0);
}
function teste() {
    if (true) {
        return 'teste';
    }
    else {
        return 1;
    }
}
