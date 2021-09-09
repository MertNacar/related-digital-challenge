<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/Todo/TodoList";

export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style lang="scss">
// Spacing
.p-6 {
  padding: 3rem;
}
.mb-5 {
  margin-bottom: 1.5rem;
}

// widths
.w-100 {
  width: 100%;
}

// flex
.d-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.flex-grow-1 {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.flex-grow-2 {
  -webkit-box-flex: 2;
  -webkit-flex-grow: 2;
  -ms-flex-positive: 2;
  flex-grow: 2;
}

.flex-grow-4 {
  -webkit-box-flex: 4;
  -webkit-flex-grow: 4;
  -ms-flex-positive: 4;
  flex-grow: 4;
}

.align-items-center {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>
