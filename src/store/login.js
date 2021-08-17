import router from "../router";

const loginModule = {
  state: {
    isLogged: false,
  },
  getters: {
    getLoginStatus: (state) => {
      return state.isLogged;
    },
  },
  mutations: {
    logIn(state) {
      state.isLogged = true;
    },
    logOut(state) {
      state.islogged = false;
    },
  },
  actions: {
    logUserIn(context) {
      context.commit("logIn");
      router.push({ name: "Profile" });
    },
    logUserOut(context) {
      context.commit("logOut");
    },
  },
};

export default loginModule;
