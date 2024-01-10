const campoNome = document.querySelector('#nome');
const formularios = document.getElementsByTagName('form');
const botaoEnviar = document.getElementById('btn-enviar');

botaoEnviar?.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault();
})