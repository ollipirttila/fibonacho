<template>
  <div class="fibonator-container">
    <h1>Fibonaccin luku</h1>
    <div class="number-display">{{ getFiboNumber }}</div>
    <ControlButton
      class="control-button"
      @click="decrement"
      button-title="Pienempi"
    />
    <ControlButton
      class="control-button"
      @click="increment"
      button-title="Isompi"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ControlButton from "@/components/control-button.vue";

export default {
  name: "FibonacciCounter",
  components: {
    ControlButton,
  },
  methods: {
    ...mapActions(["increment", "decrement", "logUserOut"]),
  },
  computed: {
    ...mapGetters(["getFiboNumber"]),
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";
.number-display {
  font-size: $font-size-big-number;
  margin: 50px 0;
}
.control-button {
  margin-bottom: 20px;
}
</style>
