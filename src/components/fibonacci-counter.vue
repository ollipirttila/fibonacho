<template>
  <div class="fibonator-container">
    <ControlButton @click="logUserOut" button-title="Kirjaudu ulos" />
    <h1>Fibonaccin luku</h1>
    <h2 class="number-display">{{ getFiboNumber }}</h2>
    <ControlButton @click="decrement" button-title="Pienempi" />
    <ControlButton @click="increment" button-title="Isompi" />
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

<style scoped lang="scss"></style>
