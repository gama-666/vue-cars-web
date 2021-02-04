
let geolocation = null;



//当前自己的定位，根据浏览器获取，经纬度准确度会有偏差
export function SelfLocation(parms) {
    // 浏览器精确定位
    if (!geolocation) { //判断是对象是否为空，为空创建，不判断会重复创建对象
        geolocation = new AMap.Geolocation({
            showButton: false,       //显示定位按钮，默认：true
            showMarker: false,       //定位成功后在定位到的位置显示点标记，默认：true
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：5s
            zoomToAccuracy: true,    //定位成功后是否自动调整地图视野到定位点
            markerOptions: {
                content: " "
            }
        })
    }
    //覆盖物位置(经纬度)
    parms.map.addControl(geolocation);
    geolocation.getCurrentPosition()
    //定位成功
    if (parms.complete && typeof parms.complete == "function") {
        AMap.event.addListener(geolocation, 'complete', parms.complete);//返回定位信息
    }
    //定位失败
    if (parms.error && typeof parms.error == "function") {
        AMap.event.addListener(geolocation, 'complete', parms.error);//返回定位信息
    }
}


