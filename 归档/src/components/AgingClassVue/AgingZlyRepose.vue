<template>
  <div class="right-mian">
    <button @click="addCircle">画圆</button>
    <button @click="addLineString">画线</button>
    <button @click="addSquare">画正方形</button>
    <button @click="addPolygon">画多边形</button>
    <button @click="trackBack">生成轨迹回放</button>
    <button @click="trackBackStart">开始</button>
    <button @click="trackBackStop">停止</button>
    <button @click="trackBackdestroy">销毁</button>
    <button @click="timeOutAnimation">暂停</button>
    <div id="map"
      @click="drawPoint">
      上报
    </div>
  </div>

</template>


<script>
// 资料员时效类上报页面
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
    addCircle() {
      oMap.clickCircle();
      // this.data.addGridByGridCode({ gridCode: "330621056" });
    },
    addLineString() {
      oMap.clickLineString();
    },
    addSquare() {
      oMap.clickSquare();
    },
    addPolygon() {
      oMap.clickPolygon();
    },
    trackBack() {
      const line = [
        [116.95916175842285, 36.648124158382416],
        [116.9644832611084, 36.648124158382416],
        [116.97426795959473, 36.648124158382416],
        [116.98336601257324, 36.6635736823082],
        [116.99074745178223, 36.66529029607773],
        [117.00448036193848, 36.667350232601166],
        [117.00928688049316, 36.666835248470306],
        [117.02095985412598, 36.662372052669525],
        [117.0219898223877, 36.64074271917343],
        [117.02696800231934, 36.623919904232025],
        [116.9977855682373, 36.61259025335312],
        [116.96688652038574, 36.62048667669296],
        [116.96431159973145, 36.631129682064056],
      ]
      window.trb = oMap.trackBack(line);
      trb.init();
    },
    trackBackStart() {
      trb.startAnimation();
    },
    trackBackdestroy(){
      trb.destroy();
    },
    trackBackStop() {
      trb.stopAnimation();
    },
    timeOutAnimation(){
      trb.timeOutAnimation()
    },
    drawPoint() {
      // console.log(arguments)
      // this.data.OnCaseSelected();
    }
  },
  data() {
    return {
      data: {}
    };
  },
  mounted() {
    // let bodyH = $('body').outerHeight(true);
    // let bodyW = $('body').outerWidth(true);
    // let headerH = $('header').outerHeight(true);
    // $('#map').height(bodyH - headerH + 'px');
    // window.oMap = new TGisMap('map', { isShowZRWG: true, isShowBtnGroup: false });
    window.oMap = new TGisMap('map', { isShowZRWG: true, isShowBtnGroup: false });
  }
};
</script>

<style speed lang="scss">
.right-mian {
  height: 100%;
  #map {
    height: 90%;
  }
}
</style>

