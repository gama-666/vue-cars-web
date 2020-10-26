<template>
  <div id="user-wrap">
    <div class="user-info">
      <img src="../../assets/user.jpg" alt="" />
      <div class="mate">
        <h4 class="name">245692559@qq.com</h4>
        <span class="fs-14 text-center">文明驾驶分<strong>0</strong></span>
      </div>
    </div>
    <ul class="group-links">
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-account icon-w-35"></i>
        我的账户
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-order icon-w-35"></i>
        租车订单
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-authentication icon-w-35"></i>
        安全认证
      </router-link>
      <router-link to="/safe" tag="a" class="arrow">
        <i class="icon icon-setup icon-w-35"></i>
        安全设置
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-Help-center icon-w-35"></i>
        帮助中心
      </router-link>
    </ul>
    <button class="logout">登出</button>
  </div>
</template>
<script>
export default {
  name: "User",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>