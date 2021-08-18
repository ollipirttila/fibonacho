<template>
  <div id="app">
    <div id="nav">
      <img src="./assets/nacho.png" class="logo" />
      <div class="app-title">Fibonacho</div>
      <font-awesome-icon
        v-if="getLoginStatus"
        icon="sign-out-alt"
        size="2x"
        class="sign-out-icon"
        @click="logOut()"
      />
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["resetCalculation", "logUserOut"]),
    logOut() {
      this.resetCalculation();
      this.logUserOut();
    },
  },
  computed: {
    ...mapGetters(["getLoginStatus"]),
  },
};
</script>

<style lang="scss">
@import "./variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
body {
  background-color: $navy;
  margin: 0;
}
h1 {
  font-size: $font-size-h1;
}
h2 {
  font-size: $font-size-h2;
}
#nav {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  height: 70px;
  margin-bottom: 25px;
  background-color: $primary-color;
  .logo {
    margin: 10px;
    height: 40px;
  }
  .app-title {
    font-size: $font-size-title;
    font-weight: 700;
  }
  .sign-out-icon {
    position: absolute;
    right: 19px;
    top: 19px;
    color: $warm-white;
    &:active {
      color: $moss;
    }
  }
  @media only screen and (min-width: $breakpoint-tablet) {
    .sign-out-icon:hover {
      // Hover on desktop use.
      color: $moss;
    }
  }
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $warm-white;
  font-size: $font-size-default;
}
</style>
