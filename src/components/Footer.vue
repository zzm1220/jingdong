<!--
 * @Author: zhimin
 * @Date: 2020-12-31 10:22:38
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-21 14:45:47
 * @FilePath: \v-3\chap08\jingdong\src\components\Footer.vue
-->
<template>
  <div class="docker">
    <template
      v-for="item in dockerList"
      :key="item.text"
    >
      <router-link :to="item.to">
        <div
          class="docker__item"
          :class="{'docker__item--active':item.isActive}"
        >
          <span
            class="iconfont"
            v-html="item.icon"
          ></span>
          <span class="item__text">{{item.text}}</span>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  setup () {
    const dockerList = [{
      icon: '&#xe71b;',
      text: '首页',
      isActive: true,
      to: { name: 'Home' }
    }, {
      icon: '&#xe7e5;',
      text: '购物车',
      to: { name: 'Cart' }
    }, {
      icon: '&#xe605;',
      text: '订单',
      to: { name: 'OrderList' }
    }, {
      icon: '&#xe6b3;',
      text: '我的',
      to: { name: 'Home' }
    }]
    return {
      dockerList
    }
  }
}
</script>

<style scoped lang="scss">
@import '../style/varible.scss';
.docker {
  box-sizing: border-box;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  padding: 0 0.18rem;
  display: flex;
  font-size: 0.1rem;
  border-top: 0.01rem solid #f1f1f1;
  background: #ffffff;
  z-index: 100;
  a {
    flex: 1;
    color: #333333;
  }
  &__item {
    text-align: center;
    display: flex;
    flex-direction: column;
    span {
      flex: 1;
      &.iconfont {
        font-size: 0.2rem;
        margin: 0.07rem 0 0.02rem;
      }
      &.item__text {
        font-size: 0.2rem;
        transform: scale(0.5, 0.5);
        transform-origin: center top;
      }
    }
    &--active {
      color: #1fa4fc;
    }
  }
}
</style>
