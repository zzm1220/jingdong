<!--
 * @Author: zhimin
 * @Date: 2021-01-18 15:56:44
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-19 17:19:07
 * @FilePath: \v-3\chap08\jingdong\src\views\cart\CartList.vue
-->
<template>
  <div class="cartList">
    <CartItem
      v-for="(cartItem, index) in cartList"
      :key="index"
      :item="cartItem"
    />
  </div>
</template>

<script>
import CartItem from '../../components/CartItem'
export default {
  name: 'CartDetailList',
  components: {
    CartItem
  },
  props: ['cartList']
}
</script>

<style scoped lang="scss">
.cartList {
  padding: 0.16rem 0.18rem 0;
}
</style>
