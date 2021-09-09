<template>
  <button @click="onAction">{{ title }}</button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    title: {
      type: String,
      required: true,
    },
    onAction: {
      type: Function,
      required: true,
    },
  },
};
</script>
