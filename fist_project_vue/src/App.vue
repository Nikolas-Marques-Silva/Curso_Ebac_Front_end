<script setup>
  const nome = "Gian"
  const meuObj = {
    nome: "Gian",
    filmeFavorito: "Cidade de Deus"
  }
  
  function dizOi(){
    return `${nome} diz oi`;
  }

  const imagem = "https://i.kym-cdn.com/photos/images/newsfeed/002/237/352/7d5.png"

  const botaoEstaDesabilitado = false
</script>

<template>
  <h1>{{ nome }}</h1>
  <h1>{{ meuObj.filmeFavorito }}</h1>
  <h1>{{ dizOi() }}</h1>
  <img :src="imagem" alt="">
  <button :disabled="botaoEstaDesabilitado">Clique aqui</button>
</template>

<style scoped>

</style>
