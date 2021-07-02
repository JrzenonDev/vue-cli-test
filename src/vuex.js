import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    decrement: state => state.counter -= 1,
    increment: state => state.counter += 1,
  },
  getters: {
    counter: state => state.counter,
  },
  actions: {
    decrement: ({ commit }) => commit('decrement'),
    increment: ({ commit }) => commit('increment'),
  },
});

export { store };
