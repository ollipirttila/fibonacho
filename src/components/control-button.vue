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
  color: $warm-white;
  border: none;
  width: 80%;
  border-radius: 5px;
  padding: 15px 0;
  font-size: $font-size-h2;
  box-sizing: border-box;
  &:active {
    background-color: $moss;
    color: $navy;
  }
}
@media only screen and (min-width: $breakpoint-tablet) {
  .control-button:hover {
    // Hover on desktop use.
    background-color: $moss;
  }
}
</style>
