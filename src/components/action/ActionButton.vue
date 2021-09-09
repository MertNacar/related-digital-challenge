<template>
  <button :class="`btn btn-${variant}`" @click="onAction">{{ title }}</button>
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
    onAction: {
      type: Function,
      required: true,
    },
  },
};
</script>