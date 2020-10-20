<template>
  <div id="index-wrap">
    <!-- 地图 -->
    <Map />
    <!-- 车辆信息渲染 -->
    <Cars />
        <NavBar/>
    <!-- 会员中心 -->
    <div id="children-view" :class="{ open: show }">
      <router-view />
    </div>

  </div>
</template>
<script>
import Map from "../amap/index";
import Cars from "../cars/index";
import NavBar from "@/commponents/navbar/index";
export default {
  name: "Index",
  components: { Map, Cars,NavBar },
  data() {
    return{}
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
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  &.open {
    right: 0px;
  }
}
</style>