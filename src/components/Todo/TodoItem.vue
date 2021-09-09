<template>
  <div class="d-flex align-items-center w-100">
    <div class="flex-grow-1">{{ todo.id }}</div>
    <div class="flex-grow-4">{{ todo.title }}</div>
    <div class="flex-grow-2">{{ todo.name }}</div>
    <div class="flex-grow-2">{{ todo.status ? "Done" : "In Progress" }}</div>
    <div class="flex-grow-2">Actions</div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>
