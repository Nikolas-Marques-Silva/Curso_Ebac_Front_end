const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formValido = false;

function validaNome(nomeCompleto) {
    const trimmedNomeCompleto = nomeCompleto.trim();
    const nomeComoArray = trimmedNomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
};

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const numeroConta = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroConta.value}</b>`;

    formValido = validaNome(nomeBeneficiario.value);
    if (formValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario = '';
        numeroConta = '';
        valorDeposito = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    };
});

nomeBeneficiario.addEventListener('keyup', function(event) {
    formValido = validaNome(event.target.value);

    if (!formValido) {
        nomeBeneficiario.classList.add('error')
        document.querySelector('.error-message').style.display = 'none';
    } else {
        nomeBeneficiario.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none';
    }
});