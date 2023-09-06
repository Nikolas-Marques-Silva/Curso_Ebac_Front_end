alert("Vamos calcular a área de um quadrilátero?");
let base = parseFloat(prompt("Digite a base: "));
let altura = parseFloat(prompt("Digite a altura: "));

function calculaArea(base, altura) {
    return base * altura;
}

let area = calculaArea(base, altura);

alert(`A área do quadrilátero é: ${area}`);