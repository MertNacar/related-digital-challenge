import apiClient from "@/api/client";

const state = {
  items: [],
};

const getters = {};

const actions = {
  async get({ commit }) {
    const { data } = await apiClient.todos.get();

    commit("setItems", data);
  },
  async update({ dispatch }, id, params) {
    await apiClient.todos.update(id, params);

    dispatch("get");
  },
  async delete({ dispatch }, id) {
    await apiClient.todos.delete(id);

    dispatch("get");
  },
};

const mutations = {
  setItems(state, data) {
    state.items = [...data];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
