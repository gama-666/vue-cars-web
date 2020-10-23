<template>
  <div>
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img src="../../assets/cars-logo.jpg" alt="Mustang 2019款" />
          <span>Mustang 2019款</span>
        </h4>
        <p class="cars-attr">新能源汽车 5座</p>
      </header>
      <div class="cars-content">
        <div class="info">
          <div>
            <h4 class="cars-number">粤 B745N8</h4>
            <div>
              <ul class="cars-electric">
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p class="distance">
                <sub>约</sub>
                <span>600</span>
                <sub>KM</sub>
              </p>
            </div>
          </div>
        </div>
        <img src="../../assets/car-1.jpg" alt="" />
      </div>
      <footer>
        <a href="javascipt: void(0);" class="parking-link">某某某停车场</a>
      </footer>
    </section>

    <section class="cars-itme cars-detailed" :style="'height:' + height">
      <div class="scroll">
        <h4 class="column">
          某某某停车场
          <i class="close">X</i>
        </h4>
        <header>
          <h4 class="cars-logo">
            <img src="../../assets/cars-logo.jpg" alt="Mustang 2019款" />
            <span>Mustang 2019款</span>
          </h4>
          <p class="cars-attr">新能源汽车 5座</p>
        </header>
        <div class="cars-model">
          <img src="../../assets/car-1.jpg" alt="" />
        </div>
        <div class="cars-number">
          <h1 class="pull-left fs-24">粤 B745N8</h1>
          <p class="distance pull-right">
            <sub>约</sub>
            <span>600</span>
            <sub>KM</sub>
          </p>
        </div>
        <div class="cars-electric-box">
          <span class="e-high"></span>
          <span class="e-bg"></span>
        </div>
        <p class="info color-main text-center fs-14">
          取车约支付12.0元停车费，实际补贴12.0元
        </p>
        <ul class="cars-type-list">
          <li class="cursor">
            <h4 class="name pull-left">日租车</h4>
            <span class="price pull-right">￥ 300元/天</span>
          </li>
          <li>
            <h4 class="name pull-left">3日租车</h4>
            <span class="price pull-right">￥ 499元/3天</span>
          </li>
          <li>
            <h4 class="name pull-left">5日租车</h4>
            <span class="price pull-right">￥ 799元/5天</span>
          </li>
          <li>
            <h4 class="name pull-left">小时租车</h4>
            <span class="price pull-right">￥ 99.00元/1小时</span>
          </li>
        </ul>
        <div class="claus-dec">
          <span class="pull-left">参保《全面保障服务》用车更放心</span>
          <i class="cursor">√</i>
        </div>
        <a href="javascript:void(0);" class="select-cat-btn">预约用车</a>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "CarsItem",
  props: {
    height: {
      type: String,
      default: "257px"
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>