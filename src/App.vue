<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <ToDoList msg="Welcome to Your Vue.js App"/> -->
    <Counter msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// import ToDoList from './components/ToDoList.vue';
import Counter from './components/Counter.vue';

export default {
  name: 'App',
  components: {
    // ToDoList,
    Counter,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
