<template>
  <div>
    <ActionButton
      :disabled="!pageConfigs.isPrevActive"
      title="Prev"
      variant="secondary"
      :on-action="() => handleSetPage({ page: pageConfigs.currentPage - 1 })"
    />
    <ActionButton
      v-for="page in pageConfigs.pages"
      :key="page"
      :is-active="pageConfigs.currentPage === page"
      :title="page.toString()"
      variant="secondary"
      class="mx-2"
      :on-action="() => handleSetPage({ page })"
    />
    <ActionButton
      :disabled="!pageConfigs.isNextActive"
      title="Next"
      variant="secondary"
      :on-action="() => handleSetPage({ page: pageConfigs.currentPage + 1 })"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ActionButton from "@/components/action/ActionButton";

export default {
  name: "PaginationBar",
  components: { ActionButton },
  computed: {
    ...mapState({
      todos: (state) => state.todos.items,
      pageConfigs: (state) => state.todos.pageConfigs,
    }),
  },
  watch: {
    todos: {
      handler: function (newVal) {
        if (newVal) {
          this.$store.dispatch("todos/setPageConfigs", newVal);
        }
      },
      immediate: false,
      deep: true,
    },
  },
  methods: {
    handleSetPage({ page }) {
      this.$store.dispatch("todos/setCurrentPage", page);
    },
  },
};
</script>