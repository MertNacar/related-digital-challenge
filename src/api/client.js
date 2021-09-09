import api from "@/api/endpoints";

export default {
  todos: {
    async get(id, params) {
      const res = await api.todos.get(id, params);

      return res;
    },
    async update(id, payload) {
      const res = await api.todos.put(id, payload);

      return res;
    },
    async delete(id) {
      const res = await api.todos.delete(id);

      return res;
    },
  },
  users: {
    async get(id, params) {
      const res = await api.users.get(id, params);

      return res;
    },
  },
};
