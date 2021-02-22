<template>
  <div id="cars-wrap">
    <div class="cars-swiper-wrap">
      <swiper class="swiper" ref="mySwiper" :options="swiperOption">
        <swiper-slide v-for="item in carsList" :key="item.id">
          <CarsItem height="820px" :data="item" />
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
      <div class="swiper-button-next" slot="button-next" @click="next"></div>
    </div>
    <span>汽车列表</span>
  </div>
</template>
<script>
//组件
import CarsItem from "./carsItem";
//Swiper
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
//API 车辆列表接口
import { GetCarsList } from "@/api/cars";

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
      },
      carsList: [],
    };
  },
  methods: {
    prev() {
      this.$refs.mySwiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.mySwiper.$swiper.slideNext();
    },
    //车辆列表请求接口
    getCarsList(data) {
      GetCarsList({ parkingId: data.id }).then(response => {
        this.carsList = response.data.data;
        console.log(this.carsList)
      }).catch(error => {
        console.log(error)
      })
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>