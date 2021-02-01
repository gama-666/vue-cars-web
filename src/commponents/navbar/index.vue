<template>
  <div id="navbar-wrap">
    <ul>
      <li><i class="icon icon-w-44 icon-help"></i></li>
      <li><i class="icon icon-w-44 icon-seach"></i></li>
      <li><a href="javascript:void(0);" class="select-cat-btn">选择车辆</a></li>
      <li><i class="icon icon-w-44 icon-location" @click="selfLocation"></i></li>
      <li><i class="icon icon-w-44 icon-user" @click="toUser"></i></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {
    //点击时打开会员菜单
    toUser() {
      this.$router.push({
        name: "User"
      })
    },
    //点击时，回到自身定位位置，通过VUX来监听
    selfLocation() {
      this.$store.commit("location/SET_LOCATION")
    }
  }
};
</script>
<style lang="scss" scoped>
#navbar-wrap {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 96px;
  z-index: 10;
  text-align: center;
  li {
    display: inline-block;
  }
  .icon {
    margin: 0 17px;
    vertical-align: middle;

    cursor: pointer;
  }
}
.select-cat-btn {
  display: block;
  width: 240px;
  height: 84px;
  line-height: 84px;
  border-radius: 50px;
  text-align: center;
  background-color: $color-main;
  color: #ffffff;
  font-weight: 300;
  font-size: 26px;
  margin: 0 17px;
  cursor: pointer;
}
</style>