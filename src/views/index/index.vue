<template>
  <div id="index-wrap">
    <!-- 地图 -->
    <Map />
    <!-- 导航 -->
    <NavBar />
    <!-- 车辆信息渲染 -->
    <Cars />
    <!-- 会员中心 -->
    <div id="children-view" :class="{ open: show }">
      <router-view />
    </div>
  </div>
</template>
<script>
import Map from "../amap";
import Cars from "../cars";
import NavBar from "@/commponents/navbar";
export default {
  name: "Index",
  components: { Map, Cars, NavBar },
  data() {
    return {};
  },
  computed: {
    show() {
      const router = this.$route;
      return router.name === "Index" ? false : true;
    }
  }
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
  &.open {
    right: 0px;
  }
}
</style>