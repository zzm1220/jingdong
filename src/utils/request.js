/*
 * @Author: zhimin
 * @Date: 2021-01-04 16:04:16
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-04 17:35:36
 * @FilePath: \v-3\chap08\jingdong\src\utils\request.js
 */
import axios from 'axios'
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      baseURL: 'https://www.fastmock.site/mock/dc70601ab944c7552105928593c9b891/api',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response.data)
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
