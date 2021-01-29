import Vue from "vue";

//高德地图
import VueAMap from "vue-amap";
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
    //高德key，官网申请
    key: '5461862fe93d317e4ed2987b1ab172d5',
    //插件集合（插件按需加载）
    plugin: ['AMap.Geolocation', 'AMap.Pixel',' AMap.CircleEditor'],
    //不写项目会报错，具体不明白是什么
    v: '1.4.15',
    //ui版本号
    uiVersion: '1.0.11'
})