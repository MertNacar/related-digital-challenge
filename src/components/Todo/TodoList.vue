<template>
  <div class="p-6">
    <TodoHeader class="mb-5" />
    <div v-for="todo in todoList" :key="todo.id">
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>

<script>
import TodoHeader from "@/components/Todo/TodoHeader";
import TodoItem from "@/components/Todo/TodoItem";

export default {
  name: "TodoList",
  components: { TodoHeader, TodoItem },
  data() {
    return {
      todoList: [{ id: 1, title: "title", name: "Mert", status: false }],
    };
  },
};
</script>
