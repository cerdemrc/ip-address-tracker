<template>
  <div class="tracker-map">
    <l-map
      class="map"
      :zoom="zoom"
      :center="[results.location.lat, results.location.lng]"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        :lat-lng="[results.location.lat, results.location.lng]"
      ></l-marker>
    </l-map>
    <img
      class="tracker-map-icon"
      alt="Tracker Map Icon"
      src="../../images/icon-location.svg"
    />
  </div>
</template>

<script>
export default {
  props: {
    results: {
      Object,
    },
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.505, -0.159],
      markerLatLng: [51.504, -0.159],
    };
  },
};
</script>

<style lang="scss">
.tracker-map {
  width: 100%;
  padding-top: 95px;
  position: relative;
  z-index: 1;
  & .map {
    width: 100%;
    height: 500px;
  }
  &-icon {
    width: 50px;
    height: auto;
    position: absolute;
    left: 40%;
    top: 50%;
  }
}
</style>