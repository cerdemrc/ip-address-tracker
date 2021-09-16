<template>
  <div class="tracker-header">
    <h1 class="tracker-header-title main-title">IP Adress Tracker</h1>
    <div class="tracker-header-input">
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        v-model="searchText"
        @keydown.enter="sendSearchText"
      />
      <button class="btn" @click="sendSearchText">
        <img alt="Search Icon" src="../../images/icon-arrow.svg" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    sendSearchText() {
      this.$emit("search-text", this.searchText);
      this.searchText = "";
    },
  },
};
</script>

<style lang="scss">
.tracker-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-input {
    position: relative;
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
      background: $black;
      padding: 19px 20px;
      border-radius: 0 16px 16px 0;
      position: absolute;
      top: 22px;
      right: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &-title {
    margin-top: 5rem;
    font-size: 4rem;
    color: $white;
  }
}

@media screen and (max-width: 610px) {
  .tracker-header {
    &-title {
      font-size: 3rem;
    }
    & input {
      width: 400px;
    }
  }
}
@media screen and (max-width: 400px) {
  .tracker-header {
    & input {
      width: 360px;
      &::placeholder {
        font-size: 1.5rem;
      }
    }
  }
}
@media screen and (max-width: 360px) {
  .tracker-header {
    & input {
      width: 100%;
      &::placeholder {
        color: transparent;
      }
    }
  }
}
</style>