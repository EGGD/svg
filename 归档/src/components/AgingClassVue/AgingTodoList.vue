
<template>
  <div class="list-main">
    <!-- v-if="agingDetail.showFlg" -->
    <el-dialog title="案件详情" :visible.sync="agingDetail.showFlg">
      <AgingDetail @hide="detailhide" :agingDetail="agingDetail" />
    </el-dialog>
    <el-table ref="agingTable" v-loading="loading" :data="todolist.Items" :row-class-name="tableRowClassName" border style="width: 100%" height="96%">
      <el-table-column fixed prop="ID" label="ID" class="list-main-table-column">
      </el-table-column>
      <el-table-column prop="Code" label="Code" class="list-main-table-column">
      </el-table-column>
      <el-table-column prop="ItemName" label="合同" class="list-main-table-column">
      </el-table-column>
      <el-table-column prop="RegionName" label="地区" class="list-main-table-column">
      </el-table-column>
      <el-table-column prop="Address" label="地址" class="list-main-table-column-two">
      </el-table-column>
      <el-table-column prop="ReportTime" label="上报时间" class="list-main-table-column">
      </el-table-column>
      <el-table-column prop="Description" label="操作内容" class="list-main-table-column">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination :page-size="limit" :page-count="Math.ceil(todolist.Total/page)" @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="prev, pager, next, jumper">
      </el-pagination>
      <el-button size="small" @click="saveExcel">下载</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import XLSX from 'xlsx';
import AgingDetail from './AgingDetail.vue';
export default {
  methods: {
    handleClick(row) {
      this.agingDetail = { ...this.agingDetail, showFlg: true, loading: true };
      this.$store
        .dispatch('getAgingClassData', {
          id: row.ID,
          roleid: this.userData.UNIT_ID
        })
        .then(value => {
          // this.loading = false
          // this.agingDetail.loading = false
          // this.agingDetail = value
          this.agingDetail = { ...this.agingDetail, item: value, loading: false };
        });
      // this.agingDetail = { ...this.agingDetail, item: row, showFlg: true }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.start = (val - 1) * this.page;
      this.getATodoList();
    },
    tableRowClassName({ row, rowIndex }) {
      const pstate = row.ProcessoutState;
      if (pstate.indexOf('超期') === 0) {
        return 'warning-row';
      } else if (pstate === '未超期') {
        return 'success-row';
      }
      return '';
    },
    getATodoList() {
      // let userData = this.$store.getters.getLoginData
      this.loading = true;
      this.$store
        .dispatch('getATodoList', {
          start: this.start,
          limit: this.limit,
          userid: this.userData.USER_ID,
          tacheID: ''
        })
        .then(value => {
          this.loading = false;
        });
    },
    detailhide() {
      this.agingDetail.showFlg = false;
    },
    saveExcel() {
      // 如果table有固定标签的时候 导出需要设置一下内容 不然会有数据重复的问题存在 elt里面选一个就好了 如下
      var elt = this.$refs.agingTable.$el.children[3];
      var wb = XLSX.utils.table_to_book(elt, { sheet: 'Sheet JS' });
      return XLSX.writeFile(wb, 'shttjs.xlsx');
    }
  },
  data() {
    return {
      page: 20,
      start: 0,
      limit: 20,
      loading: true,
      userData: {},
      agingDetail: {
        item: {
          type: Object,
          default: {}
        },
        showFlg: false,
        loading: true
      }
    };
  },
  components: {
    AgingDetail
  },
  computed: {
    ...mapGetters({
      todolist: 'aTodoList'
    })
  },
  created() {
    this.userData = this.$store.getters.getLoginData;
    this.getATodoList();
  },
  destroyed() {
    this.$store.dispatch('clearATodoList');
  }
};
</script>

<style lang="scss" scoped>
.list-main {
  height: 100%;
  text-align: left;
  .el-pagination {
    display: inline-block;
  }
  .el-button {
    padding: 6px 13px 10px;
  }
}
.list-main-table-column {
  width: 12.5%;
}
.list-main-table-column-two {
  width: 25%;
}
.el-pagination {
  padding: 1px;
}
.block {
  text-align: left;
}
.el-table {
  .warning-row {
    background: oldlace;
  }
  .success-row {
    background: #f0f9eb;
  }
}
</style>
