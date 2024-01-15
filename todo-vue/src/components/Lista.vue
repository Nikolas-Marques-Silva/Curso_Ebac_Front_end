<script setup>
    const props = defineProps(['filteredTasks'])
</script>

<template>
    <ul v-if="props.filteredTasks.length > 0" class="list-group mt-4">
      <li class="list-group-item" v-for="(task, index) in props.filteredTasks" :key="index">
        <input @change="event => task.done = event.target.checked" v-model="task.done" :id="task.title" type="checkbox" name="" id="">
        <label :for="task.title" :class="{ done: task.done }" class="ms-3">{{ task.title }}</label>
      </li>
    </ul>
    <p v-else class="mt-4 text-center">Nenhuma tarefa pendente. Por favor, adicione uma tarefa.</p>
</template>

<style scoped>
    .done {
        text-decoration: line-through;
    }
</style>