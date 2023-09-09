const form = document.getElementById('form');
const campA = document.getElementById('campoA');
const campB = document.getElementById('campoB');
let isValid = false;
const containerMensagemSucesso = document.querySelector('.success-message');
const containerMensagemErro = document.querySelector('.error-message');

function validacao(valorA, valorB) {
    return valorB >= valorA;
};

form.addEventListener('submit', function(event) {
    event.preventDefault();
    isValid = validacao(campA.value, campB.value);

    if (isValid) {
        containerMensagemSucesso.innerHTML = "Parabéns! o campo B é maior que o campo A";
        containerMensagemSucesso.style.display = 'block';

        campA.value = '';
        campB.value = '';

    } else {
        containerMensagemErro.innerHTML = "O campo A deve ser menor que o campo B";
        containerMensagemErro.style.display = 'block';
    };
});

campA.addEventListener("keyup", function(event) {
    isValid = validacao(event.target.value, campB.value);

    if (isValid) {
        campA.classList.remove('error')
        containerMensagemErro.style.display = 'none';
    } else {
        campA.classList.add('error');
        containerMensagemErro.style.display = 'none';
    };
});