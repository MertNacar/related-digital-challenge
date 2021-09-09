<template>
  <button
    :disabled="disabled"
    :class="`btn btn-${variant} ${isActive ? 'btn-active' : ''}`"
    @click="onAction"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    title: {
      type: String,
      required: false,
      default: () => "Create",
    },
    variant: {
      type: String,
      required: false,
      default: () => "primary",
    },
    isActive: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    onAction: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.btn {
  pointer-events: auto;
  cursor: pointer;
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.36em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
}
.btn:hover {
  opacity: 0.7;
}
.btn-primary {
  background-color: rgb(36, 77, 212);
}
.btn-danger {
  background-color: rgb(224, 37, 24);
}
.btn-secondary {
  background-color: rgb(142, 142, 148);
}
.btn-active {
  opacity: 0.7;
  color: #000000;
}
</style>