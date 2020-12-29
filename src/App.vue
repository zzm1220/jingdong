<!--
 * @Author: zhimin
 * @Date: 2020-12-29 10:04:54
 * @LastEditors: zhimin
 * @LastEditTime: 2020-12-29 16:14:32
 * @FilePath: \v-3\chap08\jingdong\src\App.vue
-->
<template>
  <div class="wrapper">
    <div class="header">
      <div class="position">
        <span class="iconfont position__icon">&#xe614;</span>
        <span class="position__text"
          >北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层</span
        >
        <span class="iconfont position__bell">&#xe61d;</span>
      </div>
      <div class="search">
        <span class="iconfont search__icon">&#xe62e;</span>
        <input
          type="/"
          class="search__input"
          placeholder="山姆会员商店优惠商品"
        />
      </div>
    </div>
    <div class="content">
      <div class="banner">
        <img src="" alt="banner-img" />
      </div>
    </div>
    <div class="docker">
      <div class="docker__item docker__item--active">
        <span class="iconfont icon-home"></span>
        <span class="item__text">首页</span>
      </div>
      <div class="docker__item">
        <span class="iconfont icon-cart"></span>
        <span class="item__text">购物车</span>
      </div>
      <div class="docker__item">
        <span class="iconfont icon-order"></span>
        <span class="item__text">订单</span>
      </div>
      <div class="docker__item">
        <span class="iconfont icon-My"></span>
        <span class="item__text">我的</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./style/varible.scss";
.wrapper {
  background: $wrapper-bg;
  color: $font-color;
  font-size: $font-size;
  .header {
    width: 100%;
    height: 0.86rem;
    box-sizing: border-box;
    padding: 0.16rem 0.18rem 0;
    background: $content-bg;
    .position {
      position: relative;
      height: 0.22rem;
      &__icon {
        position: absolute;
        font-size: 0.2rem;
      }
      &__bell {
        position: absolute;
        right: 0;
        top: 0.02rem;
      }
      &__text {
        position: absolute;
        left: 0.22rem;
        font-size: 0.16rem;
        width: 3rem;
        height: 0.22rem;
        line-height: 0.22rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .search {
      width: 100%;
      height: 0.32rem;
      margin-top: 0.16rem;
      position: relative;
      color: #b7b7b7;
      &__icon {
        position: absolute;
        top: 0.08rem;
        left: 0.05rem;
      }
      &__input {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 0.14rem;
        background: $input_bg;
        border-radius: 0.16rem;
        padding-left: 0.3rem;
        color: #b7b7b7;
      }
    }
  }
  .content {
    padding-top: 0.12rem;
    .banner {
      width: 100%;
      height: 0.86rem;
    }
  }
  .docker {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.49rem;
    padding: 0 0.18rem;
    display: flex;
    font-size: 0.1rem;
    border-top: 0.01rem solid #f1f1f1;
    &__item {
      flex: 1;
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
}
</style>
