<template>
  <div class="home">
    <!-- Tähän 2 komponenttia (Login ja Main), jotka rendataan sen perusteella onko staten isLogged true vai false. -->
    <LoginForm />
    <FibonachiCounter />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from "@/components/login-form.vue";
import FibonachiCounter from "@/components/fibonachi-counter.vue";

export default {
  name: "Home",
  components: {
    LoginForm,
    FibonachiCounter,
  },
};
</script>
