<template>
  <div class="right-mian">
    <button @click="addCircle">画圆</button>
    <button @click="addLineString">画线</button>
    <button @click="addSquare">画正方形</button>
    <button @click="addPolygon">画多边形</button>
    <button @click="trackBack">trackBack</button>
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
      oMap.trackBack();
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

