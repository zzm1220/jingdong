<!--
 * @Author: zhimin
 * @Date: 2021-01-18 15:45:43
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-19 15:05:23
 * @FilePath: \v-3\chap08\jingdong\src\views\cart\CartItem.vue
-->
<template>
  <div class="cartItem">
    <div class="cartItem__title">{{item.shopName}}</div>
    <ul class="cartItem__list">
      <li
        class="list__item"
        v-for="(product,index) in item.productList"
        :key="index"
      >
        <img
          :src="product.imgSrc"
          :alt="product.title"
          class="list__item__img"
        >
        <div class="list__item__intro">
          <h4 class="intro__title">{{product.title}}</h4>
          <p class="intro__detail">
            <span class="price">￥{{product.curPrice}} x {{product.count}}</span>
            <span class="total">￥{{(product.curPrice*product.count).toFixed(2)}}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['item']
}
</script>

<style scoped lang="scss">
.cartItem {
  padding: 0.16rem;
  background: #ffffff;
  margin-bottom: 0.16rem;
  &__title {
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #333333;
    line-height: 0.22rem;
  }
  &__list {
    margin-top: 0.16rem;
    width: 100%;
    .list__item {
      margin-top: 0.16rem;
      display: flex;
      &__img {
        flex-basis: 0.46rem;
        height: 0.46rem;
        margin-right: 0.16rem;
      }
      &__intro {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .intro__title {
          padding: 0;
          margin: 0;
          font-family: PingFangSC-Medium;
          font-size: 0.14rem;
          color: #333333;
        }
        .intro__detail {
          display: flex;
          justify-content: space-between;
          .price {
            font-family: PingFangSC-Regular;
            font-size: 20px;
            transform: scale(0.5, 0.5);
            transform-origin: left center;
            color: #e93b3b;
          }
          .total {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #000000;
            line-height: 14px;
          }
        }
      }
    }
  }
}
</style>
