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
  async update({ commit }, payload) {
    await apiClient.todos.update(payload.id, payload);
    commit("updateItems", payload);
  },
  async delete({ commit }, id) {
    await apiClient.todos.delete(id);
    commit("deleteItem", id);
  },
};

const mutations = {
  setItems(state, data) {
    state.items = [...data];
  },
  updateItems(state, payload) {
    state.items = state.items.map((item) =>
      item.id === payload.id ? { ...item, ...payload } : item
    );
  },
  deleteItem(state, id) {
    state.items = state.items.filter((item) => item.id !== id);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
