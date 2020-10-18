<template>
  <div id="amap-wrap">
    <el-amap vid="amapContainer" :center="center" :zoom="zoom" :events="events" class="amap-demo"></el-amap>
  </div>
</template>
<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "Amap",
  data() {
    return {
      map: null,
      center: [116.404765, 39.918052],
      zoom: 12,
      events: {
        init(o) {
          let marker = new AMap.Marker({
            position: [116.404765, 39.918052]
          });
          marker.setMap(o);
        }
      }
    };
  },
  mouted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      //your code...
      this.map = new AMap.Map("amapContainer", {
        center: [116.404765, 39.918052],
        zoom: this.zoom
      });
    });
  }
};
</script>
<style lang="scss" scoped>
#amap-wrap {
  height: 100vh;
}
</style>