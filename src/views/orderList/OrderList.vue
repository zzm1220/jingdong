<!--
 * @Author: zhimin
 * @Date: 2021-01-21 14:25:39
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-21 17:26:23
 * @FilePath: \v-3\chap08\jingdong\src\views\orderList\OrderList.vue
-->
<template>
  <div class="orderList">
    <div class="orderList__header">我的订单</div>
    <div class="orders">
      <div
        class="order"
        v-for="item in list"
        :key="item.shopId"
      >
        <div class="order__title">
          <span class="order__title__name">{{item.shopName}}</span>
          <span class="order__title__status">{{item.isCancel?"已取消":"已下单"}}</span>
        </div>
        <div class="order__content">
          <div class="order__content__products">
            <img
              v-for="(food,index) in item.products"
              :key="index"
              class="product__img"
              :src="food.product.img"
              :alt="food.product.name"
            >
          </div>
          <div class="order__content__intro">
            <p class="price">￥{{item.price}}</p>
            <p class="num">共{{item.total}}件</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
import Footer from '../../components/Footer.vue'
const useOrderListEffect = () => {
  const data = reactive({
    list: []
  })
  const getOrderList = async () => {
    const result = await get('/order/list')
    if (result?.errno === 0 && result?.data?.length) {
      const orderList = result.data
      orderList.forEach(order => {
        let totalPrice = 0
        let totalNum = 0
        const products = order.products
        products.forEach(item => {
          totalPrice += item.product.price * item.product.sales
          totalNum += item.product.sales
        })
        order.price = totalPrice.toFixed(2)
        order.total = totalNum
      })
      data.list = result.data
    }
  }
  getOrderList()
  const { list } = toRefs(data)
  return {
    list
  }
}
export default {
  name: 'orderList',
  components: {
    Footer
  },
  setup (props) {
    const { list } = useOrderListEffect()
    console.log(list)
    return {
      list
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../style/varible.scss';
.orderList {
  color: $font-color;
  font-size: $font-size;
  overflow-y: auto;
  &__header {
    width: 100%;
    height: 0.44rem;
    line-height: 0.44rem;
    background: #ffffff;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.16rem;
    color: #333333;
  }
  .orders {
    box-sizing: border-box;
    width: 100%;
    padding: 0.16rem 0.18rem 0;
    background: $wrapper-bg;
    .order {
      box-sizing: border-box;
      width: 100%;
      margin-top: 0.16rem;
      padding: 0.16rem;
      background: #ffffff;
      &__title {
        display: flex;
        justify-content: space-between;
        &__name {
          font-family: PingFangSC-Medium;
          color: #333333;
        }
        &__status {
          font-family: PingFangSC-Medium;
          font-size: 0.14rem;
          color: #999999;
        }
      }
      &__content {
        margin-top: 0.2rem;
        display: flex;
        justify-content: space-between;
        &__products {
          flex: 1;
          .product__img {
            width: 0.4rem;
            height: 0.4rem;
            margin-right: 0.12rem;
            &:last-child {
              margin-right: 0;
            }
          }
        }
        &__intro {
          .price {
            font-family: PingFangSC-Regular;
            font-size: 0.14rem;
            color: #e93b3b;
          }
          .num {
            margin-top: 0.06rem;
            font-family: PingFangSC-Regular;
            font-size: 0.12rem;
            color: #333333;
            line-height: 14px;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
