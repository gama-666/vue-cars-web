<template>
  <div id="amap-wrap">
    <el-amap vid="amapContainer" :amap-manager="amapManager" :center="center" :zoom="zoom" :events="events" class="amap-demo">
      <!-- 覆盖物、圆 -->
      <el-amap-circle v-for="item in circle" :key="item.id" :center="item.center" :radius="item.radius" :fillColor="item.Color" :strokeColor="item.Color" :strokeOpacity="item.strokeOpacity" :strokeWeight="item.strokeWeight">
      </el-amap-circle>
    </el-amap>
  </div>
</template>
<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";

let amapManager = new AMapManager();
export default {
  name: "Amap",
  data() {
    const _this = this;
    return {
      map: null,
      amapManager,
      center: [121.59996, 31.197646],
      zoom: 18,
      circle: [
        {
          center: [113.8639, 22.56331],
          radius: 4,
          Color: "#393e43",
          strokeOpacity: "0.2",
          strokeWeight: "30",
        }
      ],
      events: {
        //兼容原生搞的SDK，初始化
        init(o) {
          lazyAMapApiLoaderInstance.load().then(() => {
            _this.intiMap()
          });
        }
      },
    };
  },
  methods: {
    //初始化地图
    intiMap() {
      this.map = amapManager.getMap()
      //地图初始化完成
      this.$emit("callbackComponent", {
        function: "loadMap"
      })
      // 浏览器精确定位
      var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：5s
        buttonPosition: 'RB',    //定位按钮的停靠位置
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
        markerOptions: {
          content: " "
        }
      });
      this.map.addControl(geolocation);
      geolocation.getCurrentPosition((status, result) => {
        if (status == 'complete') {
          const lng = result.position.lng;
          const lat = result.position.lat;
          this.circle[0].center = [lng, lat]
        } else {
          console.log(result)
        }
      });
    }
  },
  mounted() {

  }
};
</script>
<style lang="scss" scoped>
#amap-wrap {
  height: 100vh;
}
</style>