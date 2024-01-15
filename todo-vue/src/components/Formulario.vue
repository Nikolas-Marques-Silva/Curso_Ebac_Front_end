<script setup>
    const props = defineProps(['registerTask', 'tempTask', 'changeFilter', 'changeTempTask'])
</script>

<template>
    <form @submit.prevent="props.registerTask" action="">
      <div class="row">
        <div class="col">
          <input :value="props.tempTask" @change="props.changeTempTask" required type="text" name="" id="" class="form-control" placeholder="Digite aqui a descrição da sua tarefa">
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-primary">Cadastrar</button>
        </div>
        <div class="col-md-2">
          <select @change="props.changeFilter" name="" id="" class="form-control">
            <option value="todas">Todas as tarefas</option>
            <option value="pendentes">Pendentes</option>
            <option value="finalizadas">Finalizadas</option>
          </select>
        </div>
      </div>
    </form>
</template>