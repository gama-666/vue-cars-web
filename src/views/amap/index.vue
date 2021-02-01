<template>
  <div id="amap-wrap">
    <el-amap vid="amapContainer" :amap-manager="amapManager" :center="center" :zoom="zoom" :events="events" class="amap-demo">
      <!-- 覆盖物、(圆)根据浏览器获取自身定位 -->
      <el-amap-circle v-for="item in circle" :key="item.id" :center="item.center" :radius="item.radius" :fillColor="item.Color" :strokeColor="item.Color" :strokeOpacity="item.strokeOpacity" :strokeWeight="item.strokeWeight"></el-amap-circle>
      <!-- 覆盖物、(圆)停车场 -->
      <el-amap-marker v-for="(item, index) in parking" :key="item.id" :content="item.content" :offset="item.offset" :position="item.position" :vid="index"></el-amap-marker>
      <!-- 覆盖物、(车辆数量)停车场 -->
      <el-amap-marker v-for="(item, index) in parking" :key="item.index" :content="item.text" :offset="item.offsetText" :position="item.position" :vid="index"></el-amap-marker>
    
    </el-amap>
  </div>
</template>
<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
import { SelfLocation } from "./location";
let amapManager = new AMapManager();
export default {
  name: "Amap",
  data() {
    const _this = this;
    return {
      //高德地图默认数据
      map: null,
      amapManager,
      center: [121.59996, 31.197646],
      zoom: 18,
      //高德地图默认事件
      events: {
        init(o) {   //兼容原生搞的SDK，初始化
          lazyAMapApiLoaderInstance.load().then(() => {
            _this.intiMap()
          });
        }
      },
      //覆盖物、(圆)、默认定位和样式
      circle: [
        {
          center: [121.59996, 31.197646],
          radius: 4,
          Color: "#393e43",
          strokeOpacity: "0.2",
          strokeWeight: "30",
        }
      ],
      //覆盖物、(数字圆)停车场 
      parking: [],
      
    };
  },
  methods: {
    //初始化地图
    intiMap() {
      this.map = amapManager.getMap()
      this.$emit("callbackComponent", {    //地图初始化完成，事件回调
        function: "loadMap"
      })
      this.selfLocation()
    },
    //自身定位，（浏览器精确定位）
    selfLocation() {
      SelfLocation({
        map: this.map,
        complete: (val) => this.onComplete(val)
      })
    },
    //根据返回的经纬度定位
    onComplete(result) {
      let lng = result.position.lng;
      let lat = result.position.lat;
      this.circle[0].center = [lng, lat]
    },
    //停车场数据,父组件传入
    parkingData(data) {
      this.parking = data;
    },
  },
  watch: {
    //监听，当点击时会回到自身定位位置
    "$store.state.location.selfLocation": {
      handler() {
        this.selfLocation()
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#amap-wrap {
  height: 100vh;
}
</style>