<template>
  <div class="tracker-results">
    <div class="tracker-results-box">
      <h1 class="results-title">IP ADDRESS</h1>
      <h2 class="main-title results-subtitle">192.212.174.101</h2>
    </div>
    <div class="results-border" />
    <div class="tracker-results-box">
      <h1 class="results-title">LOCATION</h1>
      <h2 class="main-title results-subtitle">Brooklyn, NY 10001</h2>
    </div>
    <div class="results-border" />
    <div class="tracker-results-box">
      <h1 class="results-title">TIMEZONE</h1>
      <h2 class="main-title results-subtitle">UTC -05:00</h2>
    </div>
    <div class="results-border" />
    <div class="tracker-results-box">
      <h1 class="results-title">ISP</h1>
      <h2 class="main-title results-subtitle">SpaceX Starlink</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/style/_common.scss";
@import "../assets/style/colors.scss";

.tracker-results {
  background: $white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem 0;
  border-radius: 15px;
  margin-top: 3rem;
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
</style>