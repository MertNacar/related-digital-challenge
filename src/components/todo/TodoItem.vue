<template>
  <div class="d-flex align-items-center w-100">
    <div class="flex-grow-1">{{ todo.id }}</div>
    <div class="flex-grow-4">{{ todo.title }}</div>
    <div class="flex-grow-2">{{ todo.user ? todo.user.name : "-" }}</div>
    <div class="flex-grow-2">{{ todo.status ? "Done" : "In Progress" }}</div>
    <div class="flex-grow-2 d-flex align-items-center">
      <ActionButton
        title="Edit"
        :on-action="() => handleEditTodo({ id: todo.id })"
      />
      <ActionButton
        title="Delete"
        variant="danger"
        :on-action="() => handleDeleteTodo({ id: todo.id })"
      />
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/action/ActionButton";

export default {
  name: "TodoItem",
  components: { ActionButton },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleEditTodo({ id }) {
      console.log(`id`, id);
    },
    handleDeleteTodo({ id }) {
      console.log(`id`, id);
    },
  },
};
</script>
