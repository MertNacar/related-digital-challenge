import api from "@/api/endpoints";

export default {
  todos: {
    async getTodos(id, params) {
      const res = await api.todos.get(id, params);

      return res;
    },
    async updateTodos(id, payload) {
      const res = await api.todos.put(id, payload);

      return res;
    },
    async deleteTodos(id) {
      const res = await api.todos.delete(id);

      return res;
    },
  },
  users: {
    async getUsers(id, params) {
      const res = await api.users.get(id, params);

      return res;
    },
  },
};
