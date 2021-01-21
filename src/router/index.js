/*
 * @Author: zhimin
 * @Date: 2020-12-29 10:04:54
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-21 14:29:49
 * @FilePath: \v-3\chap08\jingdong\src\router\index.js
 */
import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
}, {
  path: '/shop/:id',
  name: 'Shop',
  component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop.vue')
}, {
  path: '/orderList',
  name: 'OrderList',
  component: () => import(/* webpackChunkName: "orderList" */ '../views/orderList/OrderList.vue')
},
{
  path: '/orderCreation/:id',
  name: 'orderCreation',
  component: () => import(/* webpackChunkName: "orderCreation" */ '../views/orderConfirm/OrderConfirm.vue')
}, {
  path: '/cart',
  name: 'Cart',
  component: () => import(/* webpackChunkName: "orderCreation" */ '../views/cart/Cart.vue')
}, {
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue'),
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
  component: () => import(/* webpackChunkName: "register" */ '../views/register/Register.vue'),
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
