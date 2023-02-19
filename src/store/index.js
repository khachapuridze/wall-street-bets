import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      menuIsOpen: false,
      service: null,
    };
  },
  mutations: {
    toggleMenu(state) {
      state.menuIsOpen = !state.menuIsOpen;
    },
    setService(state, value) {
      state.service = value;
    },
  },
  actions: {},
  modules: {},
});
