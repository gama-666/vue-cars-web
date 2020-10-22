<template>
  <div id="cars-wrap">
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
    <span @click="user">汽车列表</span>
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
@import "./index.scss";
</style>