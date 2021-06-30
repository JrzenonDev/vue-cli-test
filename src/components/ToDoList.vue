<template>
  <div>
    <h1>To-Do List With Vue</h1>
    <input v-model.trim="task">
    <button @click="addTask" type="button">Adicionar</button>
    <ul>
      <li v-for="task in tasks" :key="task">{{task}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data() {
    return {
      task: 'José',
      tasks: ['Task 01', 'Task 02', 'Task 03'],
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
      this.task = '';
    },
  },
};
</script>
