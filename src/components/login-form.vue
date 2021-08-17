<template>
  <div class="login-container">
    <input v-model="usernameInput" placeholder="Anna käyttäjätunnus" />
    <input v-model="passwordInput" placeholder="Anna salasana" />
    <ControlButton @click="submitLogin()" button-title="Kirjaudu" />
    <ErrorMessage
      v-if="showLoginError"
      error-message="Väärä salasana tai tunnus. Yritä uudelleen."
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ControlButton from "./control-button.vue";
import ErrorMessage from "./error-message.vue";
export default {
  components: { ControlButton, ErrorMessage },
  name: "LoginForm",
  props: {},
  data() {
    return {
      usernameInput: "",
      passwordInput: "",
      username: "sala",
      password: "kala",
      showLoginError: false,
    };
  },
  methods: {
    ...mapActions(["logUserIn"]),
    submitLogin() {
      if (
        this.usernameInput == this.username &&
        this.passwordInput == this.password
      ) {
        this.showLoginError = false;
        this.logUserIn();
      } else {
        this.showLoginError = true;
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
