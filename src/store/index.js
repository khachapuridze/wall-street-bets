import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      menuIsOpen: false,
    };
  },
  mutations: {
    toggleMenu(state) {
      state.menuIsOpen = !state.menuIsOpen;
    },
  },
  actions: {},
  modules: {},
});
