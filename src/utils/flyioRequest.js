
let fly = require("flyio")

import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

//设置超时
fly.config.timeout = 5000;
//设置请求基地址
fly.config.baseURL = process.env.VUE_APP_BASE_API


// 添加请求拦截器
fly.interceptors.request.use((request) => {
  // 在发送请求之前做些什么 
  if (store.getters.token) {
    request.headers['token'] = getToken()
  }
  console.log(request)
  return request
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
fly.interceptors.response.use((res) => {
  console.log(res)
  Message({
    message: '走了fly请求工具',
    duration: 3 * 1000
  })

  // 对响应数据做些事
  // if (!res.data) {
  // return Promise.reject(res)
  // }
  return res.data.data
}, (error) => {
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default fly