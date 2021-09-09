import apiClient from "@/api/client";

const state = {
  items: [],
  pageConfigs: {
    pages: [],
    currentPage: 1,
    totalPages: 0,
    isNextActive: false,
    isPrevActive: false,
  },
};

const getters = {
  currentItems(state) {
    const { items } = state;
    const { currentPage } = state.pageConfigs;
    return items.slice((currentPage - 1) * 10, currentPage * 10);
  },
};

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
  setPageConfigs({ commit }, items) {
    const pageCounts = Math.ceil(items.length / 10);
    let pages = [];

    for (let i = 1; i < pageCounts + 1; i++) {
      pages.push(i);
    }

    commit("setPageConfigs", { pages, pageCounts });
  },
  setCurrentPage({ commit }, page) {
    commit("setCurrentPage", page);
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
  sortItems(state, asc) {
    state.items = state.items.sort((a, b) =>
      asc ? a.completed - b.completed : b.completed - a.completed
    );
  },
  setPageConfigs(state, { pages, pageCounts }) {
    state.pageConfigs = {
      ...state.pageConfigs,
      pages,
      totalPages: pageCounts,
      isNextActive: pageCounts > 1,
    };
  },
  setCurrentPage(state, page) {
    state.pageConfigs = {
      ...state.pageConfigs,
      isNextActive: state.pageConfigs.totalPages > page,
      isPrevActive: page > 1,
      currentPage: page,
    };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
