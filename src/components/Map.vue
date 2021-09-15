<template>
  <div class="tracker-map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4209255.005580816!2d35.07163765349831!3d39.481259330074586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e68aa4f69b%3A0x3552adaf7c94c68c!2zQ3VtaHVyaXlldCBIYWxrIFBhcnRpc2kgxLBzdGFuYnVsIMSwbCBCYcWfa2FubMSxxJ_EsQ!5e0!3m2!1str!2str!4v1617021652656!5m2!1str!2str"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </div>
</template>

<style lang="scss">
.tracker-map {
  width: 100%;
  padding-top: 95px;
  & iframe {
    width: 100%;
    height: 450px;
  }
}
</style>