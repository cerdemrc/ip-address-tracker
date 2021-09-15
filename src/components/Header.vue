<template>
  <div class="tracker-header">
    <h1 class="tracker-header-title main-title">IP Adress Tracker</h1>
    <input type="text" placeholder="Search for any IP address or domain" />
    <button class="btn btn-dark">
      <img src="../../images/icon-arrow.svg" />
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/style/_common.scss";
@import "../assets/style/colors.scss";
.tracker-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  &-title {
    margin-top: 5rem;
    font-size: 4rem;
    color: $white;
  }
  & input {
    margin-top: 2.5rem;
    padding: 18px;
    width: 600px;
    outline: none;
    border-radius: 16px;
    border: none;
    &::placeholder {
      font-size: 1.7rem;
      font-family: "Rubik", sans-serif;
      color: $lightGray;
    }
  }
  & .btn {
    background: #000;
    padding: 18px 20px;
    border-radius: 0 16px 16px 0;
    position: absolute;
    top: 121px;
    right: 420px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>