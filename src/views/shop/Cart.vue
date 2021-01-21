<!--
 * @Author: zhimin
 * @Date: 2021-01-07 10:32:16
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-19 15:41:54
 * @FilePath: \v-3\chap08\jingdong\src\views\shop\Cart.vue
-->
<template>
  <div>
    <div
      class="mask"
      v-if="showCart&&total"
    ></div>
    <div class="cart">
      <div
        class="title"
        v-if="showCart&&total"
      >
        <div class="title__input">
          <input
            type="checkbox"
            id="checkall"
            class="checkall"
            v-model="allChecked"
            @click="setCartItemsChecked(shopId)"
          >
          <label for="checkall">全选</label>
        </div>
        <div
          class="title__desc"
          @click="cleanProductsFromCart(shopId)"
        >清空购物车</div>
      </div>
      <div
        class="products"
        v-if="showCart"
      >
        <template v-for="product in productsList">
          <div
            v-if="product.count>0"
            class="products__item"
            :key="product._id"
          >
            <input
              type="checkbox"
              v-model="product.check"
              class="product__check"
              @click="changeCheck(shopId, product._id)"
            >
            <img
              class="products__item__img"
              :src="product.imgSrc"
              :alt="product.title"
            />
            <div class="products__item__intro">
              <p class="item__title">{{product.title}}</p>
              <div class="item__price">
                <span class="cur-price">{{product.curPrice}}</span>
                <span class="origin-price">{{product.originPrice}}</span>
              </div>
            </div>
            <div class="products__item__order">
              <span
                class="icon minus"
                @click="minusItemNumFromCart(shopId, product._id, product)"
              >-</span>
              <span>{{product.count || 0}}</span>
              <span
                class="icon plus"
                @click="addItemNumToCart(shopId, product._id, product)"
              >+</span>
            </div>
          </div>
        </template>
      </div>
      <div class="check">
        <div
          class="check__icon"
          @click="showCartProducts"
        >
          <img
            class="check__img"
            src="http://www.dell-lee.com/imgs/vue3/basket.png"
            alt="basket"
          >
          <span class="check__num">{{total}}</span>
        </div>
        <div class="check__total">
          总计：<span class="yen">&yen;</span><span class="total__price">{{price}}</span>
        </div>
        <div class="check__check">
          <router-link :to="{path: `/orderCreation/${id}`}">
            去结算
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useCommonCartEffect } from './commonCartEffect'
const useCartEffect = (shopId) => {
  const store = useStore()
  const { addItemNumToCart, minusItemNumFromCart } = useCommonCartEffect()
  const cartList = store.state.cartList
  const showCart = ref(false)
  const total = computed(() => {
    const products = cartList[shopId.value]?.productList || {}
    let count = 0
    if (products) {
      for (const i in products) {
        const product = products[i]
        count += product.count
      }
    }
    return count
  })
  const price = computed(() => {
    const products = cartList[shopId.value]?.productList || {}
    let totalPrice = 0
    if (products) {
      for (const i in products) {
        const product = products[i]
        if (product.check) {
          totalPrice += product.count * product.curPrice
        }
      }
    }
    return totalPrice.toFixed(2)
  })
  const productsList = computed(() => {
    const products = cartList[shopId.value]?.productList || []
    console.log(products)
    return products
  })
  const allChecked = computed(() => {
    const products = cartList[shopId.value]?.productList || {}
    let isChecked = true
    if (products) {
      for (const i in products) {
        const product = products[i]
        if (!product.check) {
          isChecked = false
          break
        }
      }
    }
    return isChecked
  })
  const changeCheck = (shopId, productId) => {
    console.log(shopId)
    store.commit('changeCartItemCheck', {
      shopId,
      productId
    })
  }
  const cleanProductsFromCart = (shopId) => {
    store.commit('cleanProducts', {
      shopId
    })
  }
  const setCartItemsChecked = (shopId) => {
    store.commit('setCartItemsChecked', {
      shopId
    })
  }
  const showCartProducts = () => {
    showCart.value = !showCart.value
  }
  return {
    showCart,
    total,
    price,
    allChecked,
    productsList,
    addItemNumToCart,
    minusItemNumFromCart,
    changeCheck,
    cleanProductsFromCart,
    setCartItemsChecked,
    showCartProducts
  }
}
export default {
  name: 'Cart',
  props: {
    id: {
      type: String
    }
  },
  setup (props) {
    const shopId = ref(props.id)
    const {
      showCart,
      total,
      price,
      allChecked,
      productsList,
      addItemNumToCart,
      minusItemNumFromCart,
      changeCheck,
      cleanProductsFromCart,
      setCartItemsChecked,
      showCartProducts
    } = useCartEffect(shopId)
    console.log(productsList)
    return {
      showCart,
      shopId,
      total,
      price,
      allChecked,
      productsList,
      addItemNumToCart,
      minusItemNumFromCart,
      changeCheck,
      cleanProductsFromCart,
      setCartItemsChecked,
      showCartProducts
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../style/mixins';
@import '../../style/common';
.cart {
  z-index: 199;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: #ffffff;
  .title {
    box-sizing: border-box;
    width: 100%;
    height: 0.52rem;
    line-height: 0.52rem;
    padding: 0 0.18rem;
    font-size: 0.14rem;
    display: flex;
    justify-content: space-between;
    &__input {
      flex-basis: 0.56rem;
      .checkall {
        display: inline-block;
        width: 0.19rem;
        height: 0.19rem;
        vertical-align: middle;
        margin-right: 0.06rem;
      }
    }
    &__desc {
      color: #333333;
    }
  }
  .products {
    overflow-y: scroll;
    flex: 1;
    &__item {
      position: relative;
      display: flex;
      flex: 1;
      box-sizing: border-box;
      padding: 0.12rem 0.18rem;
      border-bottom: 1px solid #f1f1f1;
      .product__check {
        position: absolute;
        top: 0.32rem;
      }
      &__img {
        width: 0.46rem;
        height: 0.46rem;
        margin: 0 0.16rem 0 0.2rem;
      }
      &__intro {
        flex: 1;
        overflow: hidden;
        .item__title {
          font-family: PingFangSC-Medium;
          font-size: 0.14rem;
          color: #333333;
          margin-bottom: 0.06rem;
          padding: 0;
          @include ellipsis;
        }
        .item__price {
          font-size: 0.14rem;
          .cur-price {
            width: 0.36rem;
            font-family: PingFangSC-Regular;
            font-size: 0.14rem;
            color: #e93b3b;
            margin-right: 0.06rem;
          }
          .origin-price {
            width: 0.27rem;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #999999;
            text-decoration: line-through;
          }
        }
      }
      &__order {
        width: 0.72rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        float: right;
        .icon {
          display: inline-block;
          box-sizing: border-box;
          width: 0.2rem;
          height: 0.2rem;
          line-height: 0.16rem;
          border-radius: 50%;
          font-size: 0.2rem;
          text-align: center;
        }
        .minus {
          border: 0.01rem solid #666666;
          color: #666666;
        }
        .plus {
          background: #0091ff;
          color: #ffffff;
        }
      }
    }
  }
  .check {
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    border-top: 1px solid #f1f1f1;
    background: #ffffff;
    display: flex;
    &__icon {
      flex-basis: 0.75rem;
      line-height: 0.5rem;
      text-align: center;
      position: relative;
      .check__img {
        width: 0.28rem;
        height: 0.26rem;
      }
      .check__num {
        display: inline-block;
        min-width: 0.2rem;
        min-height: 0.2rem;
        position: absolute;
        top: -0.1rem;
        right: 0rem;
        line-height: 0.2rem;
        border-radius: 50%;
        background: #e93b3b;
        font-family: PingFangSC-Medium;
        font-size: 0.12rem;
        color: #ffffff;
        transform: scale(0.5);
        transform-origin: left center;
      }
    }
    &__total {
      flex: 1;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #333333;
      .yen,
      .total__price {
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #e93b3b;
      }
    }
    &__check {
      flex-basis: 1rem;
      text-align: center;
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #ffffff;
      background: #4fb0f9;
    }
  }
}
</style>
