import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      numberAnimation: false,
    };
  },
  mutations: {
    startNumberAnimation(state) {
      state.numberAnimation = true;
    },
  },
  actions: {},
  modules: {},
});
