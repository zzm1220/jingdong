/*
 * @Author: zhimin
 * @Date: 2020-12-29 10:04:54
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-04 10:14:14
 * @FilePath: \v-3\chap08\jingdong\src\router\index.js
 */
import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/register/Register.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/login',
  name: 'Login',
  component: Login,
  beforeEnter: (to, from, next) => {
    const {
      isLogin
    } = localStorage
    isLogin ? next({
      name: 'Home'
    }) : next()
  }
}, {
  path: '/register',
  name: 'Register',
  component: Register,
  beforeEnter: (to, from, next) => {
    const {
      isLogin
    } = localStorage
    isLogin ? next({
      name: 'Home'
    }) : next()
  }
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const {
    isLogin
  } = localStorage
  const {
    name
  } = to
  const isLoginOrRegister = (name === 'Login' || name === 'Register')
  const toNext = isLogin || isLoginOrRegister
  toNext ? next() : next({
    name: 'Login'
  })
})

export default router
