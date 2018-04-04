import { api } from './loginApi'
import axios from '../config/axios'
const state = {
  loginData: {
    type: Object,
    default: {}
  },
  userAuthority: [{ 'ID': 10100, 'Name': '时效类案件', 'Url': null, 'Image': null, 'Tilte': 'image/zly/sxlaj.png', 'children': [{ 'ID': 10101, 'Name': '上报', 'Url': null, 'Image': '上报案件', 'Tilte': 'image/zly/sxlaj_sb.png', 'children': [{ 'ID': 1010103, 'Name': '上报', 'Url': 'ShiXiao-ShangBao/qtsb.html', 'Image': '资料员上报', 'Tilte': null, 'children': [] }] }, { 'ID': 10102, 'Name': '待办', 'Url': null, 'Image': '待办案件', 'Tilte': 'image/zly/sxlaj_db.png', 'children': [{ 'ID': 1010207, 'Name': '待办理', 'Url': 'ShiXiao-DaiBan/dpq.html', 'Image': '资料员待办-待办理', 'Tilte': '', 'children': [] }] }, { 'ID': 10103, 'Name': '全部', 'Url': null, 'Image': '全部案件', 'Tilte': 'image/zly/sxlaj_qb.png', 'children': [{ 'ID': 1010309, 'Name': '全部', 'Url': 'ShiXiao-QuanBu/zlyqb.html', 'Image': '资料员全部案件', 'Tilte': null, 'children': [] }, { 'ID': 1010302, 'Name': '已办理', 'Url': 'ShiXiao-QuanBu/qbybl.html', 'Image': '资料员全部已办理', 'Tilte': null, 'children': [] }, { 'ID': 1010306, 'Name': '已作废', 'Url': 'ShiXiao-QuanBu/qbyzf.html', 'Image': '资料员全部已作废', 'Tilte': null, 'children': [] }] }] }, { 'ID': 10200, 'Name': '计划类养护', 'Url': null, 'Image': null, 'Tilte': 'image/zly/jhlyh.png', 'children': [{ 'ID': 10201, 'Name': '上报', 'Url': '', 'Image': '上报方案', 'Tilte': 'image/zly/jhlyh_sb.png', 'children': [{ 'ID': 1020102, 'Name': '上报月度计划', 'Url': 'JiHua-ShangBao/ydsb.html', 'Image': '资料员计划类月度上报', 'Tilte': '', 'children': [] }] }, { 'ID': 10202, 'Name': '待办', 'Url': '', 'Image': '待办项目', 'Tilte': 'image/zly/jhlyh_db.png', 'children': [{ 'ID': 1020202, 'Name': '待处理', 'Url': 'JiHua-DaiBan/dcllb.html', 'Image': '资料员计划类待处理', 'Tilte': null, 'children': [] }] }, { 'ID': 10203, 'Name': '全部', 'Url': '', 'Image': '全部方案', 'Tilte': 'image/zly/jhlyh_qb.png', 'children': [{ 'ID': 1020301, 'Name': '已处理', 'Url': 'JiHua-QuanBu/qbYcl.html', 'Image': '资料员/监理计划类全部已处理', 'Tilte': null, 'children': [] }, { 'ID': 1020302, 'Name': '已审批', 'Url': 'JiHua-QuanBu/qbYsp.html', 'Image': '资料员/监理计划类全部已审批', 'Tilte': null, 'children': [] }, { 'ID': 1020303, 'Name': '已完工', 'Url': 'JiHua-QuanBu/qbYwg.html', 'Image': '资料员/监理计划类全部已完工', 'Tilte': null, 'children': [] }, { 'ID': 1020304, 'Name': '计划列表', 'Url': 'JiHua-QuanBu/qbJhlb.html', 'Image': '资料员/监理计划类全部计划列表', 'Tilte': '', 'children': [] }] }] }]
}
const getters = {
  // 获取登录用户信息
  getLoginData: state => state.loginData,
  getUserAuthority: state => state.userAuthority
}
const actions = {
  // 登录
  subLogin ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      axios.postAsync(commit, api.loginUrl, params).then((value) => {
        commit(api.loginUrl, value)
        resolve(value)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  userAuthority ({ commit, state }) {
    return new Promise(function (resolve, reject) {
      axios.getAsync(commit, api.userAuthorityUrl, {
        id: state.loginData.USER_ID
      }).then((value) => {
        commit(api.userAuthorityUrl, value)
        resolve(value)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  }
}
const mutations = {
  // 将登录信息赋值
  [api.loginUrl] (state, data) {
    state.loginData = data
  },
  [api.userAuthorityUrl] (state, data) {
    state.userAuthority = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
