const calculationModule = {
  state: {
    currentFibNumber: 1,
    index: 1,
    calculateFiboNumber(n) {
      // Helper constants needed for closed-form expression of Fibonachi Numbers, AKA Binet's formula.
      const goldenRatio = (1 + Math.sqrt(5)) / 2;
      const psi = -1 / goldenRatio;
      // Binet's formula, rounded to nearest integer for floating-point rounding errors
      return Math.round((goldenRatio ** n - psi ** n) / Math.sqrt(5));
    },
  },
  getters: {
    getFiboNumber: (state) => {
      return state.currentFibNumber;
    },
  },
  mutations: {
    increase(state) {
      state.index++;
      state.currentFibNumber = state.calculateFiboNumber(state.index);
    },
    decrease(state) {
      if (state.index >= 2) {
        state.index--;
        state.currentFibNumber = state.calculateFiboNumber(state.index);
      }
    },
    resetFibNumber(state) {
      state.currentFibNumber = 1;
      state.index = 1;
    },
  },
  actions: {
    increment(context) {
      context.commit("increase");
    },
    decrement(context) {
      context.commit("decrease");
    },
    resetCalculation(context) {
      context.commit("resetFibNumber");
    },
  },
};

export default calculationModule;
