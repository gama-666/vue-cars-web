<template>
  <div id="index-wrap">
    <!-- 车辆信息渲染 -->
    <Cars ref="cars" />
    <!-- 地图 -->
    <Map ref="map" @callbackComponent="callbackComponent" />
    <!-- 导航 -->
    <NavBar />
    <!-- 会员中心 -->
    <div id="children-view" :class="{ open: show }">
      <router-view />
    </div>
    <!-- 登陆 -->
    <Login />
  </div>
</template>
<script>
import Map from "../amap";
import Cars from "../cars";
import Login from "./login"
import NavBar from "@/commponents/navbar";
import { Parking } from "@/api/parking";

export default {
  name: "Index",
  components: { Map, Cars, NavBar, Login },
  data() {
    return {};
  },
  methods: {
    //地图回调
    callbackComponent(parms) {
      parms.function && this[parms.function](parms.data)
    },
    //地图初始化完成回调
    loadMap() {
      this.getParking()
    },
    //获取停车场数据
    getParking() {
      Parking().then(response => {
        const data = response.data.data;
        data.forEach((item, index) => {
          item.position = item.lnglat.split(',');
          item.content = "<img src='" + require('@/assets/parking.png') + "' />";
          item.offset = [-26, -60];
          item.offsetText = [-10, -45];
          item.text = `<div style="width:53px; height:63px;color:#ffffff">${item.carsNumber}</div>`;
          item.index = index;
          item.events = {
            click: () => {
              this.walkClick(item); //路线规划
              this.$refs.cars && this.$refs.cars.getCarsList(item); //父组件调用子组件方法,车辆列表信息接口请求
            }
          }
        })
        //调用地图方法,父组件调用子组件方法
        this.$refs.map.parkingData(data)
      })
    },
    //回调，步行路径规划
    walkClick(item) {
      const lnglat = item.lnglat.split(",");
      this.$refs.map.handlerWalking(lnglat)
      this.$refs.map.saveData({
        key: "parking_data",
        value: item
      })
    }
  },
  computed: {
    //监听是否打开会员菜单
    show() {
      const router = this.$route;
      return router.name === "Index" ? false : true;
    }
  },
  mounted() {
    //挂载完成时，鼠标抬起时事件
    document.addEventListener("mouseup", e => {
      const userCon = document.querySelector("#children-view");
      if (userCon) {
        //contains方法：判断目标是否包含
        if (!userCon.contains(e.target)) {
          this.$router.push({
            name: "Index"
          }).catch(error => error);
        }
      }
    });
  },
};
</script>
<style lang="scss" scoped>
#children-view {
  position: fixed;
  top: 0;
  right: -600px;
  bottom: 0;
  z-index: 101;
  width: 410px;
  background-color: #34393f;
  @include webkit(transition, all 0.3s ease 0s);
  @include webkit(box-shadow, -5px 0 38px 0 rgba(0, 0, 0, 0.4));
  &.open {
    right: 0px;
  }
}
</style>