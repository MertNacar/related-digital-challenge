<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="w-10">#</div>
    <div class="w-30">Title</div>
    <div class="w-20">Assignee</div>
    <div class="w-20">
      Status
      <ActionButton
        is-icon-btn
        variant="secondary"
        :icon="asc ? 'caret-up-solid.svg' : 'caret-down-solid.svg'"
        :on-action="handleSortTodo"
      />
    </div>
    <div class="w-20">Actions</div>
  </div>
</template>

<script>
import ActionButton from "@/components/action/ActionButton";

export default {
  name: "TodoHeader",
  components: { ActionButton },
  data() {
    return {
      asc: null,
    };
  },
  methods: {
    handleSortTodo() {
      const { commit } = this.$store;

      this.asc = this.asc ? !this.asc : true;
      commit("todos/sortItems", this.asc);
    },
  },
};
</script>
