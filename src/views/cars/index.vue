<template>
  <div id="cars-wrap">
    <div class="cars-swiper-wrap">
      <swiper class="swiper" ref="mySwiper" :options="swiperOption">
        <swiper-slide><CarsItem height="820px" /></swiper-slide>
        <swiper-slide><CarsItem /></swiper-slide>
        <swiper-slide><CarsItem /></swiper-slide>
        <swiper-slide><CarsItem /></swiper-slide>
        <swiper-slide><CarsItem /></swiper-slide>
        <swiper-slide><CarsItem /></swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
      <div class="swiper-button-next" slot="button-next" @click="next"></div>
    </div>
    <span>汽车列表</span>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import CarsItem from "@c/carsItem";
export default {
  name: "Cars",
  components: { Swiper, SwiperSlide, CarsItem },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    prev() {
      this.$refs.mySwiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.mySwiper.$swiper.slideNext();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>