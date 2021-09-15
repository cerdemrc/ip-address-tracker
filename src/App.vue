<template>
  <div class="tracker-main">
    <div class="container">
      <Header @search-text="getInfos($event)" />
      <Results :results="results" :isError="isError" />
    </div>
    <Map :results="results" />
    <Attribution />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Results from "./components/Results.vue";
import Map from "./components/Map.vue";
import Attribution from "./components/Attribution.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    Header,
    Results,
    Map,
    Attribution,
  },
  data() {
    return {
      results: null,
      isError: false,
    };
  },
  methods: {
    getInfos(searchText) {
      const apiKey = "at_to5AdZDjtdywSHkCEczkFpfCdtuVn";
      axios
        .get(
          `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${searchText}`
        )
        .then((res) => {
          console.log(res.data);
          this.results = res.data;
          this.isError = false;
        })
        .catch(() => {
          this.isError = true;
          this.results = null;
        });
    },
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

