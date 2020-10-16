<template>
  <div id="app">
    <div class="amap-wrapper">
      <el-amap class="amapDemo" vid="amapDemo" :center="center" :zoom="zoom"></el-amap>
    </div>
  </div>
</template>
<script>
export default {
  name:"Index",
  data() {
    return {
      zoom:12,
      center:[116.404765,39.918052],
      data:[{a:1}]
    };
  }
};
</script>
<style lang="scss">
.amap-wrapper {
  height: 100vh;
}
</style>