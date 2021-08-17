import Vue from "vue";
import Vuex from "vuex";
import calculationModule from "./calculation";
import loginModule from "./login";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { login: loginModule, calc: calculationModule },
});
