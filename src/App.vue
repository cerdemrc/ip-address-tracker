<template>
  <div class="tracker-main">
    <div class="container">
      <Header />
      <Results />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Results from "./components/Results.vue";
export default {
  name: "App",
  components: {
    Header,
    Results,
  },
};
</script>

<style lang="scss">
@import "./assets/style/_common.scss";
@import "./assets/style/colors.scss";
.tracker-main {
  background: url(../images/pattern-bg.png) no-repeat;
  background-size: cover;
  width: 100%;
  height: 27rem;
}
</style>

