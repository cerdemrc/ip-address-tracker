<template>
  <div class="tracker-map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6350044.413859999!2d30.68683479465469!3d39.00145059958364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1str!2str!4v1631743916870!5m2!1str!2str"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
    <img src="../../images/icon-location.svg" />
  </div>
</template>

<style lang="scss">
.tracker-map {
  width: 100%;
  padding-top: 95px;
  position: relative;
  & iframe {
    width: 100%;
    height: 450px;
  }
  & img {
    width: 50px;
    height: auto;
    position: absolute;
    left: 70rem;
    top: 25rem;
  }
}
</style>