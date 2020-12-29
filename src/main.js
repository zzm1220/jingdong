/*
 * @Author: zhimin
 * @Date: 2020-12-29 10:04:54
 * @LastEditors: zhimin
 * @LastEditTime: 2020-12-29 15:56:04
 * @FilePath: \v-3\chap08\jingdong\src\main.js
 */
import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './style/index.css'

createApp(App).use(store).use(router).mount('#app')
