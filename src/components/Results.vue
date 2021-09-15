<template>
  <div class="tracker-results-wrapper">
    <div class="tracker-results result-bg" v-if="results">
      <div class="tracker-results-box">
        <h1 class="results-title">IP ADDRESS</h1>
        <h2 class="main-title results-subtitle">{{ results.ip }}</h2>
      </div>
      <div class="results-border" />
      <div class="tracker-results-box">
        <h1 class="results-title">LOCATION</h1>
        <h2 class="main-title results-subtitle">
          {{ results.location.city }}, {{ results.location.country }}
          {{ results.location.postalCode }}
        </h2>
      </div>
      <div class="results-border" />
      <div class="tracker-results-box">
        <h1 class="results-title">TIMEZONE</h1>
        <h2 class="main-title results-subtitle">
          UTC {{ results.location.timezone }}
        </h2>
      </div>
      <div class="results-border" />
      <div class="tracker-results-box">
        <h1 class="results-title">ISP</h1>
        <h2 class="main-title results-subtitle">{{ results.isp }}</h2>
      </div>
    </div>
    <div class="tracker-fail-result result-bg" v-if="isError">
      <h1>No results found for this ip address.</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    results: {
      Object,
    },
    isError: {
      Boolean,
    },
  },
};
</script>

<style lang="scss">
@import "../assets/style/_common.scss";
@import "../assets/style/colors.scss";

.tracker-results-wrapper {
  position: relative;
  z-index: 99;
}
.tracker-results {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 3rem;
  padding: 30px 0;
  &-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 60px;
    width: 30%;
    & .results-title {
      font-size: 1.2rem;
      letter-spacing: 2px;
      color: $lightGray;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    & .results-subtitle {
      font-size: 2.5rem;
      color: $darkGray;
      font-weight: 500;
    }
  }
  & .results-border {
    width: 1px;
    height: 80px;
    background: $lightGray;
  }
}

.tracker-fail-result {
  text-align: center;
  margin-top: 50px;
  padding: 20px 0;
  & h1 {
    font-size: 2rem;
    font-weight: 500;
    color: $darkGray;
  }
}
</style>