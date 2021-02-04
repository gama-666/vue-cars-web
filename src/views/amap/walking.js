let walking = null;
//步行路线规划，位置经纬度 + 步行路线规划
export function Walking(parms) {
    //步行导航
    if (!walking) {
        walking = new AMap.Walking({
            map: parms.map,
            hideMarkers: true
        })
    }
    //根据起终点坐标规划步行路线
    walking.search(parms.position_start, parms.position_end, (status, result) => {
        // result即是对应的步行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_WalkingResult
        if (status === 'complete') {
            if (parms.complete && typeof parms.complete == "function") {
                parms.complete(result)
            }
        } else {
            console.log('步行路线数据查询失败' + result)
        }
    });

}
