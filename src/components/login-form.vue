<template>
  <div class="login-container">
    <label class="input-label">Käyttäjätunnus</label>
    <input v-model="usernameInput" class="login-input" />
    <label class="input-label">Salasana</label>
    <input v-model="passwordInput" class="login-input" />
    <ErrorMessage
      class="login-error"
      v-if="showLoginError"
      error-message="Väärä salasana tai tunnus. Yritä uudelleen."
    />
    <ControlButton
      class="login-button"
      @click="submitLogin()"
      button-title="Kirjaudu sisään"
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

<style scoped lang="scss">
@import "../variables.scss";
.login-container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  .input-label {
    width: 80%;
    display: flex;
    flex-flow: row nowrap;
    padding: 0 0 10px 0;
  }
  .login-input {
    width: 80%;
    height: 40px;
    box-sizing: border-box;
    padding: 10px 0 10px 10px;

    border-radius: 5px;
    background-color: $warm-white;
    font-size: $font-size-default;
    color: $navy;
    outline: none;
    &:nth-child(2) {
      margin-bottom: 15px;
    }
  }
  .login-error {
    margin-top: 15px;
  }
  .login-button {
    margin-top: 60px;
  }
}
</style>
