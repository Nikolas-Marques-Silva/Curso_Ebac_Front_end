document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("form-sorteador").addEventListener('submit', function(event) {
    event.preventDefault()
    let numeroMaximo = parseInt(document.getElementById("numero-maximo").value)
    let numeroAleatorio = Math.random() * numeroMaximo + 1
    document.getElementById("valor-do-resultado").innerText = Math.floor(numeroAleatorio)
    document.querySelector('.resultado').style.display = 'block'
  })
})
