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