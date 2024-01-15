<script setup>
  import { reactive, computed } from 'vue';
  import Header from './components/Header.vue';
  import Formulario from './components/Formulario.vue';
  import Lista from './components/Lista.vue';

  const state = reactive({
    tasks: [
      {
        title: 'Estudar ES6',
        done: false
      },
      {
        title: 'Estudar Vue',
        done: false  
      },
      {
        title: 'Estudar React',
        done: false
      }
    ],
    filter: 'todas',
    tempTask: ''
  })

  const getPendentTasks = computed(() => {
    return state.tasks.filter((task) => !task.done)
  })

  const getFinalizedTasks = computed(() => {
    return state.tasks.filter((task) => task.done)
  })

  const getFilteredTasks = computed(() => {
    const { filter } = state

    switch (filter) {
      case 'pendentes':
        return getPendentTasks.value
      case 'finalizadas':
        return getFinalizedTasks.value
      default:
        return state.tasks
    }
  })

  const registerTask = () => {
    const newTask = {
      title: state.tempTask,
      done: false
    }
    
    state.tasks.push(newTask)
    state.tempTask = ''
  }
</script>

<template>
  <div class="container">
    <Header :pendentsTasks="getPendentTasks.length" />
    <Formulario :tempTask="state.tempTask" :registerTask="registerTask" :changeFilter="event => state.filter = event.target.value" :changeTempTask="event => state.tempTask = event.target.value" />
    <Lista :filteredTasks="getFilteredTasks" />
  </div>
</template>

<style scoped>

</style>
