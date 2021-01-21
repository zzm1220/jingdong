<!--
 * @Author: zhimin
 * @Date: 2021-01-20 14:13:00
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-20 16:07:51
 * @FilePath: \v-3\chap08\jingdong\src\views\orderConfirm\Mask.vue
-->
<template>
  <div
    class="mask"
    v-if="isShow"
  >
    <div class="mask__content">
      <h4 class="mask__content__title">确认要离开收银台？</h4>
      <p class="mask__content__intro">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btn">
        <button
          class="btn__cancel"
          @click="handleCancelOrder"
        >取消订单</button>
        <button
          class="btn__confirm"
          @click="handleConfirmOrder"
        >确认支付</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mask',
  props: ['isShow'],
  setup (props, context) {
    const { emit } = context
    const handleCancelOrder = () => {
      emit('changeShow')
    }
    const handleConfirmOrder = () => {
      emit('confirmOrder')
    }
    return {
      handleCancelOrder,
      handleConfirmOrder
    }
  }
}
</script>
<style lang="scss" scoped>
.mask {
  z-index: 99;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  &__content {
    box-sizing: border-box;
    width: 3rem;
    height: 1.57rem;
    padding: 0.24rem 0.52rem;
    margin: 2.43rem auto;
    background: #ffffff;
    &__title {
      margin: 0;
      padding: 0;
      font-family: PingFangSC-Medium;
      font-size: 18px;
      color: #333333;
      text-align: center;
    }
    &__intro {
      margin-top: 0.08rem;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #666666;
      text-align: center;
    }
    &__btn {
      margin-top: 0.24rem;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      .btn__cancel {
        width: 0.8rem;
        height: 0.32rem;
        border: 1px solid #4fb0f9;
        border-radius: 16px;
        border-radius: 16px;
        color: #0091ff;
      }
      .btn__confirm {
        width: 0.8rem;
        height: 0.32rem;
        background: #4fb0f9;
        border: 1px solid #4fb0f9;
        border-radius: 16px;
        border-radius: 16px;
        color: #ffffff;
      }
    }
  }
}
</style>
