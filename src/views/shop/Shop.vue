<!--
 * @Author: zhimin
 * @Date: 2021-01-05 14:34:25
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-05 17:33:43
 * @FilePath: \v-3\chap08\jingdong\src\views\shop\Shop.vue
-->
<template>
  <div class="wrapper">
    <div class="search">
      <div
        class="search__back iconfont"
        @click="handleBackClick"
      >&#xe609;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe62e;</span>
        <input
          type="text"
          class="search__content__input"
          placeholder="请输入商品名称"
        >
      </div>
    </div>
    <div class='shop'>
      <shop-item
        :item="data.item"
        v-show="data.item.imgSrc"
      />
    </div>
  </div>

</template>

<script>
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopItem from '../../components/ShopItem.vue'
const useInputSearchEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return {
    handleBackClick
  }
}
const useShopDetailEffect = () => {
  const route = useRoute()
  const data = reactive({
    item: {}
  })
  const getShopDetail = async () => {
    const result = await get(`/shop/detail/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  return {
    data,
    getShopDetail
  }
}
export default {
  name: 'Shop',
  components: {
    ShopItem
  },
  setup () {
    const { handleBackClick } = useInputSearchEffect()
    const { data, getShopDetail } = useShopDetailEffect()
    getShopDetail()
    return {
      data,
      handleBackClick
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../style/varible.scss';

.wrapper {
  padding: 0.16rem 0.18rem 0;
  font-size: 0.16rem;
  .search {
    display: flex;
    height: 0.32rem;
    &__back {
      line-height: 0.32rem;
      flex-basis: 0.14rem;
      color: #b6b6b6;
      margin-right: 0.1rem;
      font-size: 0.22rem;
    }
    &__content {
      line-height: 0.32rem;
      flex: 1;
      position: relative;
      &__icon {
        color: #b7b7b7;
        position: absolute;
        font-size: 0.16rem;
        left: 0.16rem;
        top: 0.02rem;
      }
      &__input {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding-left: 0.44rem;
        background: $input_bg;
        border-radius: 0.16rem;
        outline: none;
        border: none;
        font-size: 0.14rem;
        color: #333333;
      }
    }
  }
}
</style>
