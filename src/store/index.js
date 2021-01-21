/*
 * @Author: zhimin
 * @Date: 2020-12-29 10:04:54
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-21 14:13:31
 * @FilePath: \v-3\chap08\jingdong\src\store\index.js
 */
import { createStore } from 'vuex'

const setLocalStorage = (key, data) => {
  const dataStr = JSON.stringify(data)
  localStorage[key] = dataStr
}

const getLocalStorage = (key) => {
  try {
    const dataObj = JSON.parse(localStorage[key]) || {}
    return dataObj
  } catch (err) {
    const errObj = {}
    return errObj
  }
}

export default createStore({
  // shopId: {
  //   shopName: "沃尔玛",
  //   productList: {
  //     productId: {
  //     }
  //   }
  // }
  state: {
    cartList: getLocalStorage('cartList') || {}
  },
  mutations: {
    addItemNumToCart (state, payload) {
      const { shopId, productId, product } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) {
        shopInfo = {
          shopName: '',
          productList: {}
        }
      }
      let productInfo = shopInfo.productList[productId]
      if (!productInfo) {
        productInfo = product
      }
      productInfo.count += 1
      if (productInfo.count > 0) {
        productInfo.check = true
      } else {
        productInfo.check = false
      }
      shopInfo.productList[productId] = productInfo
      state.cartList[shopId] = shopInfo
      setLocalStorage('cartList', state.cartList)
    },
    minusItemNumFromCart (state, payload) {
      const { shopId, productId, product } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) {
        shopInfo = {
          shopName: '',
          productList: {}
        }
      }
      let productInfo = shopInfo.productList[productId]
      if (!productInfo) {
        productInfo = product
      }
      productInfo.count -= 1
      if (productInfo.count > 0) {
        productInfo.check = true
      } else {
        productInfo.check = false
      }
      if (productInfo.count < 0) productInfo.count = 0
      shopInfo.productList[productId] = productInfo
      state.cartList[shopId] = shopInfo
      setLocalStorage('cartList', state.cartList)
    },
    changeCartItemCheck (state, payload) {
      const { shopId, productId } = payload
      state.cartList[shopId].productList[productId].check = !state.cartList[shopId].productList[productId].check
      setLocalStorage('cartList', state.cartList)
    },
    cleanProducts (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalStorage('cartList', state.cartList)
    },
    setCartItemsChecked (state, payload) {
      const { shopId } = payload
      const products = state.cartList[shopId].productList
      for (const i in products) {
        const product = products[i]
        product.check = true
      }
      setLocalStorage('cartList', state.cartList)
    },
    setShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      shopInfo.shopName = shopName
      console.log(shopInfo)
      setLocalStorage('cartList', state.cartList)
    },
    clearCart (state, payload) {
      const { shopId } = payload
      console.log(shopId)
      state.cartList[shopId].productList = {}
    }
  },
  actions: {
  },
  modules: {
  }
})
