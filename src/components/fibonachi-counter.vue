<template>
  <div class="fibonator-container">
    <h1>Fibonachin luku</h1>
    <h2 class="number-display">{{ getFiboNumber }}</h2>
    <ControlButton @click="decrement" button-title="Pienempi" />
    <ControlButton @click="increment" button-title="Isompi" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ControlButton from "@/components/control-button.vue";

export default {
  name: "FibonachiCounter",
  components: {
    ControlButton,
  },
  methods: {
    ...mapActions(["increment", "decrement"]),
  },
  computed: {
    ...mapGetters(["getFiboNumber"]),
  },
};
</script>

<style scoped lang="scss"></style>
