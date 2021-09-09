import axios from "axios";

export default {
  todos: {
    get(id, params) {
      if (id) {
        return axios.get(`/todos/${id}`, { params });
      }
      return axios.get(`/todos`, { params });
    },
    put(id, payload) {
      return axios.put(`/todos/${id}`, payload);
    },
    delete(id) {
      return axios.delete(`/todos/${id}`);
    },
  },
  users: {
    get(id, params) {
      if (id) {
        return axios.get(`/users/${id}`, { params });
      }
      return axios.get(`/users`, { params });
    },
  },
};
