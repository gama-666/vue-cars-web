<template>
  <div id="bank-card-wrap">
    <!--  全局组件 -->
    <Back column="绑定银行卡" />
    <!-- 绑定银行卡 -->
    <div class="cars-form-ui">
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.name" placeholder="绑定银行卡"></el-input>
        </el-form-item>
        <el-form-item>
          <button type="button" class="button-vcode">获取验证码</button>
          <el-input v-model="form.name" placeholder="验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" style="width:100%">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "BankCard",
  data() {
    return {
      form: {
        name: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style lang="scss" scoped>
#bank-card-wrap {
  padding: 0 30px;
}
</style>