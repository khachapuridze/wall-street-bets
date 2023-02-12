import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      menuIsOpen: false,
    };
  },
  mutations: {
    // toggleMenu(state, value) {
    //   state.menuIsOpen = value;
    // },
  },
  actions: {},
  modules: {},
});
