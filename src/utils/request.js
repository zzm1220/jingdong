/*
 * @Author: zhimin
 * @Date: 2021-01-04 16:04:16
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-05 16:54:23
 * @FilePath: \v-3\chap08\jingdong\src\utils\request.js
 */
import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/dc70601ab944c7552105928593c9b891/api',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json'
  }
})
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params
    }).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
