<template>
  <button
    :disabled="disabled"
    :class="`
      btn btn-${variant} 
      ${isActive ? 'btn-active' : ''} 
      ${isIconBtn ? 'btn-icon' : ''}
    `"
    @click="onAction"
  >
    <img
      v-if="isIconBtn"
      :src="`/assets/icons/${icon}`"
      width="11px"
      height="11px"
    />
    <span v-else>{{ title }}</span>
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
    icon: {
      type: String,
      required: false,
      default: () => "caret-down-solid.svg",
    },
    variant: {
      type: String,
      required: false,
      default: () => "primary",
    },
    isIconBtn: {
      type: Boolean,
      required: false,
      default: () => false,
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
.btn-icon {
  padding: unset;
  margin: unset;
  width: 16px;
  height: 16px;
}
</style>