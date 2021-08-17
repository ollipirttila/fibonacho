<template>
  <div class="home">
    <LoginForm v-if="!getLoginStatus" />
  </div>
</template>

<script>
import LoginForm from "@/components/login-form.vue";
import { mapGetters } from "vuex";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
  computed: {
    ...mapGetters(["getLoginStatus"]),
  },
};
</script>
