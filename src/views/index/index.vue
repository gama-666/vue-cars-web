<template>
  <div id="index-wrap">
    <!-- 地图 -->
    <Map @callbackComponent="callbackComponent" />
    <!-- 导航 -->
    <NavBar />
    <!-- 车辆信息渲染 -->
    <!-- <Cars /> -->
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
    callbackComponent(parms) {
      parms.function && this[parms.function](parms.data)
    },
    loadMap() {
    
      this.getParking()
    },
    getParking() {
      Parking().then(response => {
        console.log(response)
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