<!--
 * @Author: zhimin
 * @Date: 2021-01-05 14:49:45
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-05 15:01:57
 * @FilePath: \v-3\chap08\jingdong\src\components\ShopItem.vue
-->
<template>
  <div class="shopItem">
    <img
      class="shopItem__img"
      :src="item.imgSrc"
      :alt="item.name"
    />
    <div class="shopItem__content">
      <h4 class="shopItem__content__title">{{item.name}}</h4>
      <div class="shopItem__content__items">
        <span class="item_text">月售：{{item.sales}}</span>
        <span class="item_text">起送：{{item.expressLimit}}</span>
        <span class="item_text">基础运费：{{item.expressPrice}}</span>
      </div>
      <div class="shopItem__content__intro">
        {{item.slogon}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopItem',
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style scoped lang='scss'>
@import '../style/varible.scss';
.shopItem {
  margin-top: 0.14rem;
  width: 100%;
  display: flex;
  &__img {
    width: 0.56rem;
    height: 0.56rem;
  }
  &__content {
    margin-left: 0.16rem;
    padding-bottom: 0.12rem;
    border-bottom: 0.01rem bolid $wrapper-bg;
    &__title {
      margin: 0;
      font-size: 0.16rem;
      font-weight: normal;
      line-height: 0.22rem;
    }
    &__items {
      margin-top: 0.08rem;
      font-size: 0.13rem;
      line-height: 0.18rem;
      & .item_text {
        margin-right: 0.16rem;
      }
    }
    &__intro {
      margin-top: 0.08rem;
      font-size: 0.13rem;
      line-height: 0.18rem;
      color: #e93b3b;
    }
  }
}
</style>
