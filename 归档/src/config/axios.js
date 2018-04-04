import axios from 'axios'
import * as env from './env.js'
import router from '../router/index'
import qs from 'qs'

var baseAxios = axios.create({
  baseURL: env.baseUrl,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    'content-type': 'application/x-www-form-urlencoded'
  },
  timeout: 30000
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    next()
  } else {
    if (to.name === 'Login') {
      next()
    }
  }
  // if (to.meta.requiresAuth) { // 判断该路由是否需要登录权限
  //   if (Utils.getCookie('TOKEN')) {
  //     next()
  //   } else {
  //     window.top.location.reload()
  //     window.top.location.href = 'login'
  //   }
  // } else {
  // next()
  // }
})

baseAxios.interceptors.request.use(function (config) {
  config.data = qs.stringify(config.data)
  config.headers['content-type'] = 'application/x-www-form-urlencoded'
  if (config.auth) {
    return config
  }
  // if (config.method === 'post') {
  //   config.data = qs.stringify({
  //     ...config.data
  //   })
  // }
  return config
}, function (error) {
  return Promise.reject(error)
})

baseAxios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        router.replace({
          path: '/',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
    }
  }
  return Promise.reject(error.response.data)
})

baseAxios.getAsync = function (commit, URL, params) {
  return new Promise(function (resolve, reject) {
    baseAxios.get(URL, {
      params: params
    }).then((response) => {
      var retData = response.data
      // var orginalData = retData.Data
      // commit(URL, orginalData)
      resolve(retData)
    }, (error) => {
      console.log(error)
      reject(error)
    })
  })
}

baseAxios.deleteAsync = function (commit, URL, params) {
  return new Promise(function (resolve, reject) {
    baseAxios.delete(URL, {
      params: params
    }).then((response) => {
      var retData = response.data
      var orginalData = retData.Data
      commit(URL, orginalData)
      resolve(retData)
    }, (error) => {
      console.log(error)
      reject(error)
    })
  })
}

// baseAxios.getAsyncWithConcat = function (commit, URL, params) {
//   return new Promise(function (resolve, reject) {
//     baseAxios.get(Utils.concatGetRequestParam(URL, params)).then((response) => {
//       var retData = response.data
//       var orginalData = retData.Data
//       commit(URL, orginalData)
//       resolve(retData)
//     }, (error) => {
//       console.log(error)
//       reject(error)
//     })
//   })
// }

baseAxios.postAsync = function (commit, URL, params, headers = {}) {
  return new Promise(function (resolve, reject) {
    baseAxios.post(URL, params, headers
    ).then((response) => {
      var retData = response.data
      // var orginalData = retData.Data;
      // commit(URL, data);
      resolve(retData)
    }, (error) => {
      console.log(error)
      reject(error)
    })
  })
}

baseAxios.postFormDataAsync = function (commit, URL, params, headers = {}) {
  params = objectToFormData(params)
  return new Promise(function (resolve, reject) {
    baseAxios.post(URL, params, headers
    ).then((response) => {
      var retData = response.data
      // var orginalData = retData.Data;
      // commit(URL, data);
      resolve(retData)
    }, (error) => {
      console.log(error)
      reject(error)
    })
  })
}

function objectToFormData (object) {
  const formData = new FormData()
  if (Object.prototype.toString.call(object) === '[object Array]') {
    Object.keys(object).forEach((key) => {
      Object.keys(object[key]).forEach((key1) => {
        formData.append(key1, object[key][key1])
      })
    })
  } else {
    Object.keys(object).forEach((key) => {
      if (Object.prototype.toString.call(object[key]) === '[object Array]') {
        Object.keys(object[key]).forEach((key1) => {
          formData.append(key, object[key][key1])
        })
      } else {
        formData.append(key, object[key])
      }
    })
  }
  return formData
}

export default baseAxios
