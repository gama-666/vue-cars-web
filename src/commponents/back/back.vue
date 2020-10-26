<template>
  <div id="header-back">
    <div class="back fs-16">
      {{column}}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    column: {
      type: String,
      default: "返回上一步"
    }
  },
  name: "Back",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
#header-back {
  height: 107px;
  .back {
    position: relative;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    color: #fff;
    padding-left: 30px;
    cursor: pointer;
  }
  .back:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0px;
    width: 12px;
    height: 12px;
    margin-top: -5px;
    border-left: 2px solid $color-blur;
    border-top: 2px solid $color-blur;
    @include webkit(transform, rotate(-45deg));
    @include webkit(box-sizing, border-box);
  }
}
</style>