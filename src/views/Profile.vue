<template>
  <div class="profile">
    <FibonacciCounter />
  </div>
</template>

<script>
import FibonacciCounter from "@/components/fibonacci-counter.vue";
import { mapGetters } from "vuex";

export default {
  name: "Login",
  components: {
    FibonacciCounter,
  },
  computed: {
    ...mapGetters(["getLoginStatus"]),
  },
};
</script>
<style scoped lang="scss"></style>
