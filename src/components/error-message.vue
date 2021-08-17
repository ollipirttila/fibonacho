<template>
  <div class="error-message">
    {{ errorMessage }}
  </div>
</template>

<script>
export default {
  name: "ErrorMessage",
  props: {
    errorMessage: String,
  },
  methods: {},
};
</script>

<style scoped lang="scss">
@import "../variables.scss";
.error-message {
  color: red;
}
</style>
