<script setup>
  const nome = "Gian"
  const meuObj = {
    nome: "Gian",
    filmeFavorito: "Cidade de Deus"
  }
  
  function dizOi(){
    return `${nome} diz oi`;
  }

  const imagemDoN = "https://i.kym-cdn.com/photos/images/newsfeed/002/237/352/7d5.png"
  const imagemDaUzi = "https://i.scdn.co/image/ab67706c0000da84c097328895765e6e5c67da7b"

  const botaoEstaDesabilitado = false

  const gostaDoN = false
  const gostaDaUzi = true
</script>

<template>
  <h1>{{ nome }}</h1>
  <h1>{{ meuObj.filmeFavorito }}</h1>
  <h1>{{ dizOi() }}</h1>
  <img v-if="gostaDoN" :src="imagem" alt="">
  <img v-else-if="gostaDaUzi" :src="imagem" alt="">
  <h2 v-else>Não curte NUzi</h2>
  <button :disabled="botaoEstaDesabilitado">Enviar</button>
</template>

<style scoped>
  img {
    width: 300px;
  }
</style>
