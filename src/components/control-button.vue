<template>
  <button class="control-button" @click="onClick($event)">
    {{ buttonTitle }}
  </button>
</template>

<script>
export default {
  name: "ControlButton",
  props: {
    buttonTitle: String,
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";
.control-button {
  background-color: $primary-color;
  color: $white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  margin-right: 10px;
}
</style>
