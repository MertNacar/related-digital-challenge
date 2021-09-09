import apiClient from "@/api/client";

const state = {
  items: [],
};

const getters = {};

const actions = {
  async get({ commit }) {
    const { data } = await apiClient.users.get();

    commit("setItems", data);
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
