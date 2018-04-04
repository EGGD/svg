// 全局store配置文件
import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import agingClass from './AgingClass/index'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
// const modules = Object.assign({}, login, agingClass)
// console.log(modules)
const store = new Vuex.Store({
  modules: {
    login,
    agingClass
  },
  strict: debug
})
export default store
