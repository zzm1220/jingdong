<!--
 * @Author: zhimin
 * @Date: 2021-01-18 15:32:44
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-19 14:46:11
 * @FilePath: \v-3\chap08\jingdong\src\views\cart\CartHeader.vue
-->
<template>
  <div class="cartList__header">
    我的全部购物车（{{total}}）
  </div>
</template>

<script>
export default {
  name: 'CartHeader',
  props: ['total']
}
</script>

<style scoped lang="scss">
.cartList__header {
  width: 100%;
  height: 0.64rem;
  line-height: 0.64rem;
  background: #ffffff;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #333333;
  text-align: center;
}
</style>
