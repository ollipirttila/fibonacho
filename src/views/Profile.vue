<template>
  <div class="profile">
    <FibonachiCounter />
  </div>
</template>

<script>
import FibonachiCounter from "@/components/fibonachi-counter.vue";
import { mapGetters } from "vuex";

export default {
  name: "Login",
  components: {
    FibonachiCounter,
  },
  computed: {
    ...mapGetters(["getLoginStatus"]),
  },
};
</script>
