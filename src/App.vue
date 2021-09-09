<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import "@/assets/css/index.css";
import TodoList from "@/components/todo/TodoList";

export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>
