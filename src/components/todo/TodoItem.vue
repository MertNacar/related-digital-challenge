<template>
  <div class="d-flex align-items-center">
    <div class="w-10">{{ todo.id }}</div>
    <div class="w-30">{{ todo.title }}</div>
    <div class="w-20">{{ todo.user ? todo.user.name : "-" }}</div>
    <div class="w-20">{{ todo.completed ? "Done" : "In Progress" }}</div>
    <div class="w-20 d-flex align-items-center">
      <ActionButton title="Edit" :on-action="() => onEditTodo({ todo })" />
      <ActionButton
        title="Delete"
        variant="danger"
        :on-action="() => onDeleteTodo({ id: todo.id })"
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
    onEditTodo: {
      type: Function,
      required: true,
    },
    onDeleteTodo: {
      type: Function,
      required: true,
    },
  },
};
</script>
