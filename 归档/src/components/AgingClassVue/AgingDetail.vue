<template>
  <div class="detail-div">
    <el-form v-loading="data.loading" :inline="true" ref="form" :model="data" label-width="80px" size="mini">
      <div class="detail-repose-before">处理前</div>
      <div class="detail-div-two">
        <el-form-item label="案件编号">
          <el-input v-model="data.item.Code" :readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="养护单位">
          <el-input v-model="data.item.MaintenancetName"></el-input>
        </el-form-item>
        <el-form-item label="项目名称">
          <!-- <el-input v-model="data.item.ItemName" :readonly="true"></el-input> -->
          <el-select v-model="data.item.ItemName" placeholder="请选择">
            <el-option @click.native="setSelectDate('ItemID',item.ID)" v-for="item in itemsData" :key="item.ID" :value="item.Name">
            </el-option>
          </el-select>
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
          <el-input v-model="data.item.ExpireStateName" :readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="超期时间">
          <!-- <el-input v-model="data.item.Expiretime"></el-input> -->
          <el-date-picker type="datetime" v-model="data.item.Expiretime" value-format="yyyy-MM-dd:hh-mm-ss" placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </div>
      <div class="detail-repose-rear">处理后</div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button @click="hide">取消</el-button>
    </div>
  </div>
</template>

<script>
import func from '../../config/func.js';
import { mapGetters } from 'vuex';
// 资料员时效类上报页面
export default {
  props: {
    agingDetail: {
      type: Object
    }
  },
  data() {
    return {
      data: {
        type: Object,
        default: {}
      },
      loading: true,
      userData: {}
    };
  },
  computed: {
    ...mapGetters({
      sourcesData: 'zlyRGetSourcesData',
      itemsData: 'zlyGetItemsData',
      bigTypesData: 'zlyGetBigTypesData',
      smallTypesData: 'zlyGetSmallTypesData'
    })
  },
  methods: {
    hide() {
      this.$emit('hide');
    },
    onSubmit() {
      // console.log(this.data.item.ItemID)
      // console.log('submit!')
    },
    setSelectDate(sdata, gdata) {
      this.data.item[sdata] = gdata;
    },
    init() {
      this.$store.dispatch('getzlyItems', {
        unitID: this.userData.UNIT_ID
      });
    }
  },
  watch: {
    agingDetail(value) {
      this.data = func.ftoString(value);
    }
  },
  created() {
    this.data = func.ftoString(this.agingDetail);
    this.userData = this.$store.getters.getLoginData;
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.detail-div {
  text-align: left;
  .detail-div-two {
    width: 100%;
    .el-form-item {
      width: 48%;
      .el-form-item__content {
        width: 70%;
        .el-select--mini,
        .el-date-editor--datetime {
          width: 100%;
        }
      }
    }
  }
  .dialog-footer {
    text-align: right;
  }
}
</style>
