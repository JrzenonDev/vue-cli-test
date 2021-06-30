import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 100,
  },
  mutations: {
    decrement: state => state.counter -= 1,
    increment: state => state.counter += 1,
  },
});

export { store };
