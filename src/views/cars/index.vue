<template>
  <div id="cars-wrap">
    <div @click="user">车辆信息</div>
  </div>
</template>
<script>
export default {
  name: "Cars",
  data() {
    return {};
  },
  methods: {
    user() {
      if (this.$route.name === "User") {
        return false;
      } else {
        this.$router.push({
          name: "User"
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#cars-wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>