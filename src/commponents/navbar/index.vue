<template>
  <div id="navbar-wrap">
    <ul>
      <li><i class="icon icon-help"></i></li>
      <li><i class="icon icon-seach"></i></li>
      <li><div class="choice">选择车辆</div></li>
      <li><i class="icon icon-location"></i></li>
      <li><i class="icon icon-user"></i></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {}
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
.choice {
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