// 路由配置文件
import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'
// import Index from '@/components/Index'

Vue.use(Router)

const Login = resolve => require(['../components/Login.vue'], resolve)
const Index = resolve => require(['../components/Index.vue'], resolve)
const AgingTodoList = resolve => require(['../components/AgingClassVue/AgingTodoList.vue'], resolve)
const AgingZlyRepose = resolve => require(['../components/AgingClassVue/AgingZlyRepose.vue'], resolve)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: '',
          menuName: 'AgingTodoList',
          component: AgingTodoList,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '10102',
          menuName: 'AgingTodoList',
          component: AgingTodoList,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '10101',
          menuName: 'AgingZlyRepose',
          component: AgingZlyRepose,
          meta: {
            requiresAuth: true
          }
        }
      ],
      meta: {
        requiresAuth: true
      }
    }
  ]
})
