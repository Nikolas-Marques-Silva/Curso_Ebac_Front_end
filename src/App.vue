<!-- App.vue -->
<template>
  <div class="calculator container">
    <div class="row">
      <div class="col">
        <header class="mt-5">
          <h1>Calculadora VueJS</h1>
          <p>Usando VueJS</p>
          <hr>
        </header>
      </div>
    </div>
    <div class="row">
      <div class="col-md-5">
        <input class="text-center form-control" v-model="num1" type="number" placeholder="Digite o primeiro número">
      </div>
      <div class="col-md-2">
        <select class="text-center form-control" v-model="operation">
      <option value="add">+</option>
      <option value="subtract">-</option>
      <option value="multiply">*</option>
      <option value="divide">/</option>
    </select>
      </div>
      <div class="col-md-5">
        <input class="text-center form-control" v-model="num2" type="number" placeholder="Digite o segundo número">
      </div>
    </div>
    <p class="text-center resultado">{{ result }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: '',
      num2: '',
      operation: 'add',
    };
  },
  computed: {
    result() {
      switch (this.operation) {
        case 'add':
          return this.num1 + this.num2;
        case 'subtract':
          return this.num1 - this.num2;
        case 'multiply':
          return this.num1 * this.num2;
        case 'divide':
          return this.num1 / this.num2;
        default:
          return 'Operação inválida';
      }
    },
  },
};
</script>

<style scoped>
.resultado {
  font-size: 160px;
}
</style>
