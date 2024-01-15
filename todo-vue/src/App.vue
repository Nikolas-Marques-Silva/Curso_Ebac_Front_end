<script setup>
  import { reactive, computed } from 'vue';
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
    <header class="p-5 mb-4 mt-4 bg-light rounded-3">
      <h1>Minhas tarefas</h1>
      <p>Você possui {{ getPendentTasks.length }} tarefas pendentes</p>
    </header>
    <form @submit.prevent="registerTask" action="">
      <div class="row">
        <div class="col">
          <input :value="state.tempTask" @change="event => state.tempTask = event.target.value" required type="text" name="" id="" class="form-control" placeholder="Digite aqui a descrição da sua tarefa">
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-primary">Cadastrar</button>
        </div>
        <div class="col-md-2">
          <select @change="event => state.filter = event.target.value" name="" id="" class="form-control">
            <option value="todas">Todas as tarefas</option>
            <option value="pendentes">Pendentes</option>
            <option value="finalizadas">Finalizadas</option>
          </select>
        </div>
      </div>
    </form>
    <ul class="list-group mt-4">
      <li class="list-group-item" v-for="(task, index) in getFilteredTasks" :key="index">
        <input @change="event => task.done = event.target.checked" v-model="task.done" :id="task.title" type="checkbox" name="" id="">
        <label :for="task.title" :class="{ done: task.done }" class="ms-3">{{ task.title }}</label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
