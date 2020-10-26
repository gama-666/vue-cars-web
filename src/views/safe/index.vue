<template>
  <div id="user-wrap">
    <!-- 返回上一步 全局组件 -->
    <Back column="安全设置"/>
    <!-- 安全设置菜单项 -->
    <ul class="group-links">
      <router-link to="/password" tag="a" class="arrow">
        修改登录密码
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        设置资金密码
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        绑定手机号
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        绑定银行卡
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Safe",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>