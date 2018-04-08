<template>
  <div>
    <button @click="addCaseMarker">sss</button>
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
    addCaseMarker() {
      this.data.addCaseMarker({
        caseCode: '冯绍士大夫峰士大夫阿斯弗士大夫阿斯蒂芬大师傅撒地方1000001',
        x: 120.22747309716121,
        y: 30.106535068597046,
        isCenter: true,
        isPopup: false,
        caseTypeId: 2,
        isHighlight: false
      });
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
    let bodyH = $('body').outerHeight(true);
    let bodyW = $('body').outerWidth(true);
    let headerH = $('header').outerHeight(true);
    $('#map').height(bodyH - headerH + 'px');
    this.data = new TGisMap('map', { isShowZRWG: true, isShowBtnGroup: false });
  }
};
</script>
