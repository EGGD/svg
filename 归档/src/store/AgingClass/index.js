import { api } from './api/funUrl';
// import axios from '../../config/axios'
import axios from '../../config/axios';
const state = {
  AgingTodoListData: [],
  zlyGetAgingClassData: [
    {
      ID: 1,
      Name: '智慧城管派遣',
      REGIONID: null,
      URL: null
    },
    {
      ID: 2,
      Name: '市政110',
      REGIONID: null,
      URL: null
    },
    {
      ID: 3,
      Name: '来信来电来访',
      REGIONID: null,
      URL: null
    },
    {
      ID: 4,
      Name: '管理部门发现',
      REGIONID: null,
      URL: null
    },
    {
      ID: 5,
      Name: '施工单位巡查',
      REGIONID: null,
      URL: null
    },
    {
      ID: 6,
      Name: '计划类养护',
      REGIONID: null,
      URL: null
    }
  ],
  zlyRGetSourcesData: [],
  zlyGetItemsData: [
    {
      ID: 30,
      Name: '新建鄞州合同0919002'
    },
    {
      ID: 31,
      Name: '新建鄞州合同'
    }
  ],
  zlyGetBigTypesData: [
    {
      ID: 98,
      Name: '沥青路面常规养护',
      REGIONID: null,
      URL: 'MaterialFile/llq.png'
    },
    {
      ID: 99,
      Name: '人行道及其他附属设施',
      REGIONID: null,
      URL: 'MaterialFile/llq.png'
    },
    {
      ID: 100,
      Name: '掘路修复',
      REGIONID: null,
      URL: 'MaterialFile/llq.png'
    },
    {
      ID: 101,
      Name: '基层养护',
      REGIONID: null,
      URL: 'MaterialFile/llq.png'
    },
    {
      ID: 102,
      Name: '水泥混凝土路面养护',
      REGIONID: null,
      URL: 'MaterialFile/llq.png'
    },
    {
      ID: 103,
      Name: '沥青路面预防性养护',
      REGIONID: null,
      URL: 'MaterialFile/llq.png'
    }
  ],
  zlyGetSmallTypesData: [
    {
      ID: 104,
      Name: '变形类',
      REGIONID: null,
      URL: null
    },
    {
      ID: 105,
      Name: '其他类',
      REGIONID: null,
      URL: null
    },
    {
      ID: 106,
      Name: '裂缝类',
      REGIONID: null,
      URL: null
    },
    {
      ID: 107,
      Name: '松散类',
      REGIONID: null,
      URL: null
    }
  ]
};
const getters = {
  aTodoList: state => state.AgingTodoListData,
  agingClassData: state => state.zlyGetAgingClassData,
  zlyRGetSourcesData: state => state.zlyRGetSourcesData,
  zlyGetItemsData: state => state.zlyGetItemsData,
  zlyGetBigTypesData: state => state.zlyGetBigTypesData,
  zlyGetSmallTypesData: state => state.zlyGetSmallTypesData
};
const actions = {
  // 获取实效类资料员代办列表数据
  getATodoList({ commit,state }, params) {
      //this.getters 可以获取到所有
    return new Promise(function(resolve, reject) {
      axios
        .getAsync(commit, api.ZLY_TODO_LIST_URL, params)
        .then(value => {
          // console.log(value)
        //   commit(api.ZLY_TODO_LIST_URL, value);
          resolve(value);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  // 获取资料员代办列表内详细数据
  getAgingClassData({ commit }, params) {
    return new Promise(function(resolve, reject) {
      axios
        .getAsync(commit, api.ZLY_GET_AGING_CLASS_BY_ID, params)
        .then(value => {
          // console.log(value)
        //   commit(api.ZLY_GET_AGING_CLASS_BY_ID, value);
          resolve(value);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getzlyRSources({ commit }, params) {
    return new Promise(function(resolve, reject) {
      axios
        .getAsync(commit, api.ZLY_GET_SOURCES, params)
        .then(value => {
          // console.log(value)
        //   commit(api.ZLY_GET_SOURCES, value);
          resolve(value);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getzlyItems({ commit }, params) {
    return new Promise(function(resolve, reject) {
      axios
        .getAsync(commit, api.ZLY_GET_ITEMS, params)
        .then(value => {
          // console.log(value)
        //   commit(api.ZLY_GET_ITEMS, value);
          resolve(value);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getzlyBigTypes({ commit }, params) {
    return new Promise(function(resolve, reject) {
      axios
        .getAsync(commit, api.ZLY_GET_BIG_TYPES, params)
        .then(value => {
          // console.log(value)
        //   commit(api.ZLY_GET_BIG_TYPES, value);
          resolve(value);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getzlySmallTypes({ commit }, params) {
    return new Promise(function(resolve, reject) {
      axios
        .getAsync(commit, api.ZLY_GET_SMALL_TYPES, params)
        .then(value => {
          // console.log(value)
        //   commit(api.ZLY_GET_SMALL_TYPES, value);
          resolve(value);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  clearATodoList({ commit }) {
    commit('clearATodoList');
  }
};
const mutations = {
  [api.ZLY_TODO_LIST_URL](state, data) {
    state.AgingTodoListData = data;
  },
  [api.ZLY_GET_AGING_CLASS_BY_ID](state, data) {
    state.zlyGetAgingClassData = data;
  },
  [api.ZLY_GET_SOURCES](state, data) {
    state.zlyGetSourcesData = data;
  },
  [api.ZLY_GET_ITEMS](state, data) {
    state.zlyGetItemsData = data;
  },
  [api.ZLY_GET_BIG_TYPES](state, data) {
    state.zlyGetBigTypesData = data;
  },
  [api.ZLY_GET_SMALL_TYPES](state, data) {
    state.zlyGetSmallTypesData = data;
  },
  clearATodoList(state) {
    state.AgingTodoListData = [];
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
