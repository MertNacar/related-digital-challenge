<template>
  <div class="p-6">
    <TodoHeader class="mb-5" />
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem
        :todo="getMergedTodoAndUser({ todo })"
        class="mb-4"
        :on-edit-todo="handleOpenModal"
        :on-delete-todo="handleDeleteTodo"
      />
    </div>
    <ActionModal
      :isOpened="isModalOpened"
      :todo="selectedTodo"
      :on-save="handleSaveTodo"
      :on-close="handleCloseModal"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import TodoHeader from "@/components/todo/TodoHeader";
import TodoItem from "@/components/todo/TodoItem";
import ActionModal from "@/components/action/ActionModal";

export default {
  name: "TodoList",
  components: { TodoHeader, TodoItem, ActionModal },
  data() {
    return {
      isModalOpened: false,
      selectedTodo: null,
    };
  },
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
    handleDeleteTodo({ id }) {
      this.$store.dispatch("todos/delete", id);
    },
    async handleOpenModal({ todo }) {
      this.selectedTodo = { ...todo };
      this.isModalOpened = true;
    },
    handleCloseModal() {
      this.isModalOpened = false;
      this.selectedTodo = null;
    },
    async handleSaveTodo({ form }) {
      const { dispatch } = this.$store;

      await dispatch("todos/update", form);
      this.handleCloseModal();
    },
  },
};
</script>
