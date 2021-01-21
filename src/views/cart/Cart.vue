<!--
 * @Author: zhimin
 * @Date: 2021-01-18 15:22:48
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-19 14:57:13
 * @FilePath: \v-3\chap08\jingdong\src\views\cart\Cart.vue
-->
<template>
  <div class="cart">
    <cart-header :total="productsTotal" />
    <cart-detail-list :cartList="cartList" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import CartHeader from './CartHeader'
import CartDetailList from './CartList'
const useCartListEffect = () => {
  const store = useStore()
  const cartList = store.state.cartList
  console.log(cartList)
  const productsTotal = computed(() => {
    let total = 0
    for (const i in cartList) {
      for (const j in cartList[i].productList) {
        total += cartList[i].productList[j].count
      }
    }
    return total
  })
  return {
    cartList,
    productsTotal
  }
}
export default {
  name: 'Cart',
  components: {
    CartHeader,
    CartDetailList
  },
  setup (props) {
    const { cartList, productsTotal } = useCartListEffect()
    return {
      cartList,
      productsTotal
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../style/varible.scss';
.cart {
  width: 100%;
  overflow-y: auto;
  font-size: $font-size;
  background: #f5f5f5;
}
</style>
