<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/todo/TodoList";

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
.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mx-2 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.mr-2 {
  margin-right: 0.5rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}

// widths
.w-100 {
  width: 100%;
}

// button
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
  font-weight: 300;
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

.justify-content-end {
  -ms-flex-pack: end !important;
  justify-content: flex-end !important;
}

.align-items-center {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>
