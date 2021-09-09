<template>
  <div class="p-6">
    <TodoHeader class="mb-5" />
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="getMergedTodoAndUser({ todo })" class="mb-4" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TodoHeader from "@/components/todo/TodoHeader";
import TodoItem from "@/components/todo/TodoItem";

export default {
  name: "TodoList",
  components: { TodoHeader, TodoItem },
  computed: {
    ...mapState({
      todos: (state) => state.todos.items,
      users: (state) => state.users.items,
    }),
  },
  mounted() {
    this.handleInitializeList();
  },
  methods: {
    async handleInitializeList() {
      await this.$store.dispatch("users/get");
      await this.$store.dispatch("todos/get");
    },
    getMergedTodoAndUser({ todo }) {
      const { users } = this;

      return {
        ...todo,
        user: users.find((user) => user.id === todo.userId),
      };
    },
  },
};
</script>
