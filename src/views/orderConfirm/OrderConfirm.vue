<!--
 * @Author: zhimin
 * @Date: 2021-01-18 10:22:49
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-21 14:31:30
 * @FilePath: \v-3\chap08\jingdong\src\views\orderConfirm\OrderConfirm.vue
-->
<template>
  <div class="orderConfirm">
    <div class="wrapper">
      <div class="top">
        <div class="top__header">
          <div
            class="iconfont top__header__back"
            @click="handleBackClick"
          >&#xe609;</div>
          <div class="top__title">确认订单</div>
        </div>
        <div class="top__receiver">
          <div class="top__receiver__title">收获地址</div>
          <div class="top__receiver__address">
            北京理工大学国防科技园2号楼10层
          </div>
          <div class="top__receiver__info">
            <span class="info__name">瑶妹（先生）</span>
            <span class="info__phone">18911024266</span>
          </div>
          <div class="iconfont top__receiver__enter">&#xe656;</div>
        </div>
      </div>
      <cart-item :item="item" />
      <div class="footer">
        <span class="desc">实付金额 </span>
        <span class="money">￥{{productsTotal}}</span>
        <button
          class="order"
          @click="handleOrderClick"
        >提交订单</button>
      </div>
      <Mask
        :isShow="isShow"
        @changeShow="handleCancelClick"
        @confirmOrder="handleConfirmOrder"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { post } from '../../utils/request'
import cartItem from '../../components/CartItem'
// import Toast, { useToastEffect } from '../../components/Toast.vue'
import Mask from './Mask'
const useCartItemEffect = () => {
  const route = useRoute()
  const store = useStore()
  const id = route.params.id
  const cartList = store.state.cartList
  const item = cartList[id] || {}
  const productsTotal = computed(() => {
    let total = 0
    for (const i in item.productList) {
      total += item.productList[i].count * item.productList[i].curPrice
    }
    return total.toFixed(2)
  })
  return { id, item, productsTotal }
}
const useOrderEffect = (id, item) => {
  const router = useRouter()
  const store = useStore()
  const isShow = ref(false)
  const products = []
  for (const i in item.productList) {
    products.push({
      id: item.productList[i]._id,
      num: item.productList[i].count
    })
  }
  const handleBackClick = () => {
    router.back()
  }
  const handleOrderClick = () => {
    isShow.value = true
  }
  const handleCancelClick = () => {
    isShow.value = false
  }
  const handleConfirmOrder = async () => {
    try {
      const result = await post('/order', {
        addressId: 1,
        shopId: id,
        shopName: item.shopName,
        isCancel: false,
        products
      })
      if (result?.errno === 0) {
        alert('下单成功')
        store.commit('clearCart', {
          shopId: id
        })
        router.push({
          name: 'OrderList'
        })
      }
    } catch (e) {
      // showToast(e)
    }
  }
  return {
    isShow,
    handleBackClick,
    handleOrderClick,
    handleCancelClick,
    handleConfirmOrder
  }
}
export default {
  name: 'orderConfirm',
  components: {
    cartItem,
    Mask
  },
  setup (props) {
    const { id, item, productsTotal } = useCartItemEffect()
    const { isShow, handleBackClick, handleOrderClick, handleCancelClick, handleConfirmOrder } = useOrderEffect(id, item)
    return {
      item,
      isShow,
      productsTotal,
      handleBackClick,
      handleOrderClick,
      handleCancelClick,
      handleConfirmOrder
    }
  }
}
</script>

<style scoped lang="scss">
.orderConfirm {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 0.16rem;
  background-color: #f5f5f5;
  overflow-y: auto;
  .wrapper {
    padding: 0.26rem 0.18rem 0;
    background-image: linear-gradient(
      0deg,
      rgba(0, 145, 255, 0) 4%,
      #0091ff 50%
    );
    .top {
      box-sizing: border-box;
      width: 100%;

      margin-bottom: 0.16rem;
      &__header {
        position: relative;
        height: 0.22rem;
        line-height: 0.22rem;
        text-align: center;
        color: #ffffff;
        font-family: PingFangSC-Regular;
        &__back {
          position: absolute;
          font-size: 0.24rem;
        }
      }
      &__receiver {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        padding: 0.16rem 0.16rem 0.16rem 0.14rem;
        margin-top: 0.22rem;
        background: #ffffff;
        &__title {
          font-family: PingFangSC-Medium;
          font-size: 16px;
          line-height: 0.22rem;
          color: #333333;
        }
        &__address {
          margin-top: 0.14rem;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          line-height: 0.2rem;
          color: #333333;
        }
        &__info {
          margin-top: 0.06rem;
          font-family: PingFangSC-Regular;
          font-size: 12px;
          line-height: 0.18rem;
          color: #666666;
        }
        &__enter {
          position: absolute;
          top: 0.46rem;
          right: 0.1rem;
          color: #666666;
          font-size: 0.18rem;
        }
      }
    }
    .footer {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      box-sizing: border-box;
      width: 100%;
      height: 0.5rem;
      padding-left: 0.18rem;
      line-height: 0.5rem;
      background: #ffffff;
      .desc {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #333333;
      }
      .money {
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #151515;
        line-height: 20px;
      }
      .order {
        width: 0.98rem;
        height: 100%;
        line-height: 100%;
        float: right;
        border: none;
        outline: none;
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #ffffff;
        background: #4fb0f9;
      }
    }
  }
}
</style>
