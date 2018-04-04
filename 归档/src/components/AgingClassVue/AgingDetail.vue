<template>
  <div class="detail-windos detail-top">
    <div class="detail-header">
      <div class="detail-header-button">
        <i class="el-icon-error" @click="hide"></i>
      </div>
      案件详情
    </div>
    <el-form v-loading="data.loading" :inline="true" ref="form" :model="data" label-width="80px" size="mini">
      <div class="detail-repose-before">处理前</div>
      <div class="detail-div-two">
        <el-form-item label="案件编号">
          <el-input v-model="data.item.Code"></el-input>
        </el-form-item>
        <el-form-item label="养护单位">
          <el-input v-model="data.item.MaintenancetName"></el-input>
        </el-form-item>
        <el-form-item label="项目名称">
          <el-input v-model="data.item.ItemName"></el-input>
        </el-form-item>
        <el-form-item label="问题来源">
          <el-input v-model="data.item.SourceName"></el-input>
        </el-form-item>
        <el-form-item label="所属城区">
          <el-input v-model="data.item.RegionName"></el-input>
        </el-form-item>
        <el-form-item label="所属道路">
          <el-input v-model="data.item.RoadName"></el-input>
        </el-form-item>
        <el-form-item label="养护类型">
          <el-input v-model="data.item.yhlxspan"></el-input>
        </el-form-item>
        <el-form-item label="处理时长">
          <el-input v-model="data.item.ProcessTimeLong"></el-input>
        </el-form-item>
        <el-form-item label="超期时间">
          <el-input v-model="data.item.Expiretime"></el-input>
        </el-form-item>
        <el-form-item label="案件坐标">
          <el-input v-model="data.item.Location"></el-input>
        </el-form-item>
        <el-form-item label="案件地址">
          <el-input v-model="data.item.Address"></el-input>
        </el-form-item>
        <el-form-item label="案件描述">
          <el-input v-model="data.item.Description"></el-input>
        </el-form-item>
        <el-form-item label="预警状态">
          <el-input v-model="data.item.ExpireStateName"></el-input>
        </el-form-item>
        <el-form-item label="超期时间">
          <el-input v-model="data.item.Expiretime"></el-input>
        </el-form-item>
      </div>
      <div class="detail-repose-rear">处理后</div>
      <div class="detail-bottom-button">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="hide">取消</el-button>
      </div>
    </el-form>
  </div>
</template>
<style lang="scss">
.detail-windos {
  position: absolute;
  z-index: 100;
  background: #ffffff;
  text-align: left;
  border: 0.5px solid #d0e2f5;
  border-radius: 12px;
  .detail-div-two {
    width: 100%;
    .el-form-item {
      width: 48%;
      text-align: center;
      .el-form-item__content {
        width: 50%;
      }
    }
  }
  .detail-header-button {
    text-align: right;
    font-size: 20px;
    color: #409eff;
  }
  .detail-header {
    text-align: center;
  }
  .detail-bottom-button {
    text-align: right;
    padding: 0 10px 10px;
  }
}
.detail-top {
  margin-top: 48px;
  .detail-repose-before,
  .detail-repose-rear {
    margin-left: 11%;
  }
}
</style>

<script>
import func from '../../config/func.js'
// 资料员时效类上报页面
export default {
  props: {
    agingDetail: {}
  },
  methods: {
    hide () {
      this.$emit('hide')
    },
    onSubmit () {
      console.log(this.data)
      console.log('submit!')
    }
  },
  data () {
    return {
      data: {
        tyep: Object,
        default: {}
      },
      loading: true
    }
  },
  watch: {
    agingDetail (value) {
      this.data = func.ftoString(value)
    }
  },
  created () {
    this.data = func.ftoString(this.agingDetail)
  }
}
</script>
