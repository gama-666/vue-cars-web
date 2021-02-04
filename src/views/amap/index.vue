<template>
  <div id="amap-wrap">
    <el-amap vid="amapContainer" :amap-manager="amapManager" :center="center" :zoom="zoom" :events="events" class="amap-demo">
      <!-- 覆盖物、(圆)根据浏览器获取自身定位 -->
      <el-amap-circle v-for="item in circle" :key="item.id" :center="item.center" :radius="item.radius" :fillColor="item.Color" :strokeColor="item.Color" :strokeOpacity="item.strokeOpacity" :strokeWeight="item.strokeWeight"></el-amap-circle>
      <!-- 覆盖物、(圆)停车场 -->
      <el-amap-marker v-for="(item, index) in parking" :key="item.id" :content="item.content" :offset="item.offset" :position="item.position" :vid="index"></el-amap-marker>
      <!-- 覆盖物、(车辆数量)停车场 -->
      <el-amap-marker v-for="(item, index) in parking" :extData="item" :events="item.events" :key="item.index" :content="item.text" :offset="item.offsetText" :position="item.position" :vid="index"></el-amap-marker>
      <!-- 覆盖物、(距离信息)停车场 -->
      <el-amap-marker v-for="(item, index) in parkingInfo" :key="item.index + index" :content="item.text" :offset="item.offsetText" :position="item.position" :vid="index"></el-amap-marker>

    </el-amap>
  </div>
</template>
<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
import { SelfLocation } from "./location";
import { Walking } from "./walking";

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
      //自身定位，起始位置
      sele_lng: "",
      sele_lat: "",
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
      //停车场(点击后)
      parking_data: "",
      //覆盖物、(数字圆,车辆数量)停车场 
      parking: [],
      //覆盖物、(距离信息)停车场信息
      parkingInfo: [],

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
      this.sele_lng = result.position.lng;
      this.sele_lat = result.position.lat;
      this.circle[0].center = [this.sele_lng, this.sele_lat]
    },
    //停车场数据,父组件传入
    parkingData(data) {
      this.parking = data;
    },
    //步行路径规划
    handlerWalking(data) {
      this.parking_data = data;
      const lnglat = this.parking_data.lnglat.split(",");
      Walking({
        map: this.map,
        position_start: [this.sele_lng, this.sele_lat],
        position_end: lnglat,
        complete: (val) => this.handlerWalkingComplete(val)
      })
    },
    //步行路径规划成功回调
    handlerWalkingComplete(data) {
      const lnglat = this.parking_data.lnglat.split(",");
      this.parkingInfo = [
        {
          position: lnglat,
          text: `<div style="width:300px;height:50px;line-height:50px;padding:0 20px;font-size:16px;color:#ffffff;background-color:#34393f;border-radius:100px;">
            <strong>${this.parking_data.carsNumber}</strong>辆车丨距离您 ${data.routes[0].distance}米
          </div>`,
          offsetText: [-22, -42]
        }]
    }
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