/*
 * @Author: zhimin
 * @Date: 2021-01-13 10:35:31
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-19 14:18:45
 * @FilePath: \v-3\chap08\jingdong\src\views\shop\commonCartEffect.js
 */
// 商品加入购物车
import { useStore } from 'vuex'

export const useCommonCartEffect = () => {
  const store = useStore()
  const cartList = store.state.cartList
  const addItemNumToCart = (shopId, productId, product, shopName) => {
    store.commit('addItemNumToCart', {
      shopId,
      productId,
      product
    })
  }
  const minusItemNumFromCart = (shopId, productId, product) => {
    store.commit('minusItemNumFromCart', {
      shopId,
      productId,
      product
    })
  }
  const setShopName = (shopId, shopName) => {
    console.log(shopId, shopName)
    store.commit('setShopName', {
      shopId,
      shopName
    })
  }
  return {
    cartList,
    addItemNumToCart,
    minusItemNumFromCart,
    setShopName
  }
}
