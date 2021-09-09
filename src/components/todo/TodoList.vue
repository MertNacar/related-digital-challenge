<template>
  <div class="p-6">
    <TodoHeader class="mb-5" />
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" class="mb-4" />
    </div>
  </div>
</template>

<script>
import apiClient from "@/api/client";
import TodoHeader from "@/components/todo/TodoHeader";
import TodoItem from "@/components/todo/TodoItem";

export default {
  name: "TodoList",
  components: { TodoHeader, TodoItem },
  data() {
    return {
      todos: [],
      users: [],
    };
  },
  mounted() {
    this.handleInitializeList();
  },
  methods: {
    async handleInitializeList() {
      await this.handleFetchUsers();
      await this.handleFetchTodos();
    },
    async handleFetchTodos() {
      const { users } = this;
      const { data } = await apiClient.todos.getTodos();

      this.todos = data.map((todo) => ({
        ...todo,
        user: users.find((user) => todo.userId === user.id),
      }));
    },
    async handleFetchUsers() {
      const { data } = await apiClient.users.getUsers();
      this.users = data;
    },
  },
};
</script>
