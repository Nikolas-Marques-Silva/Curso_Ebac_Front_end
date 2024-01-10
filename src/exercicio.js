"use strict";
/**
 * Multiplies two numbers and returns the result.
 *
 * @param {number} a - The first number to multiply.
 * @param {number} b - The second number to multiply.
 * @return {number} The product of the two numbers.
 */
function times(a, b) {
    return a * b;
}
/**
 * Generates a greeting message with the given name.
 *
 * @param {string} name - The name to include in the greeting message.
 * @return {string} The greeting message with the name included.
 */
function sayHello(name) {
    return `Olá, ${name}`;
}
console.log(times(3, 4));
console.log(sayHello("João"));
