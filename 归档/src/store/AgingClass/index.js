import { api } from './api/funUrl'
// import axios from '../../config/axios'
import axios from '../../config/axios'
const state = {
  AgingTodoListData: [],
  zlyGetAgingClassData: []
}
const getters = {
  aTodoList: state => state.AgingTodoListData,
  agingClassData: state => state.zlyGetAgingClassData
}
const actions = {
  getATodoList ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      axios.getAsync(commit, api.zlyTodoListUrl, params).then((value) => {
        // console.log(value)
        commit(api.zlyTodoListUrl, value)
        resolve(value)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getAgingClassData ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      axios.getAsync(commit, api.zlyGetAgingClassByID, params).then((value) => {
        // console.log(value)
        commit(api.zlyGetAgingClassByID, value)
        resolve(value)
      }).catch(err => {
        reject(err)
      })
    })
  },
  clearATodoList ({ commit }) {
    commit('clearATodoList')
  }

}
const mutations = {
  [api.zlyTodoListUrl] (state, data) {
    state.AgingTodoListData = data
  },
  [api.zlyGetAgingClassByID] (state, data) {
    state.zlyGetAgingClassData = data
  },
  clearATodoList (state) {
    state.AgingTodoListData = []
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
