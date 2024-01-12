<script setup>
import { reactive } from 'vue';

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

  const state = reactive({
    contador: 0,
    email: 'a@a.com',
    saldo: 5000,
    transferido: 0
  })
</script>

<template>
  <h1>{{ nome }}</h1>
  <h1>{{ meuObj.filmeFavorito }}</h1>
  <h1>{{ dizOi() }}</h1>
  <img v-if="gostaDoN" :src="imagemDoN" alt="">
  <img v-else-if="gostaDaUzi" :src="imagemDaUzi" alt="">
  <h2 v-else>Não curte NUzi</h2>
  <button :disabled="botaoEstaDesabilitado">Enviar</button>

  <br>
  <hr>

  {{ state.contador }}

  <button @click="state.contador++">+</button>
  <button @click="state.contador--">-</button>

  <br>
  <hr>

  {{ state.email }}
  <input type="text" @keyup="event => state.email = event.target.value">

  <br>
  <hr>

  Saldo: {{ state.saldo }} <br>
  Transferido: {{ state.transferido }} <br>
  Saldo atualizado: {{ state.saldo - state.transferido }} <br>
  <input :class="{'invalid': state.transferido > state.saldo }" @keyup="event => state.transferido = event.target.value" type="number" placeholder="Quantia para transferir">
  <button v-if="state.transferido <= state.saldo">Transferir</button>
  <span v-else>Valor maior que o saldo disponível</span>
</template>

<style scoped>
  img {
    width: 300px;
  }

  .invalid {
    outline-color: #f00;
    border-color: #f00;
  }
</style>
