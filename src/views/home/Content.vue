<!--
 * @Author: zhimin
 * @Date: 2020-12-31 10:19:06
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-05 17:00:13
 * @FilePath: \v-3\chap08\jingdong\src\views\home\Content.vue
-->
<template>
  <div class="content">
    <div class="banner">
      <img
        class="banner__img"
        src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
        alt="banner-img"
      />
    </div>
    <div class="icons">
      <div
        class="icons__item"
        v-for="item in iconItems"
        :key="item.id"
      >
        <img
          class="icons__img"
          :src="item.imgSrc"
          :alt="item.text"
        />
        <span class="icons__text">{{item.text}}</span>
      </div>
    </div>
    <div class="nearby">
      <h3 class="nearby__title">附近店铺</h3>
      <router-link
        v-for="item in nearByItems"
        :to="`/shop/${item._id}`"
        :key="item.name"
      >
        <ShopItem :item="item" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopItem from '../../components/ShopItem'
const useNearbyEffect = () => {
  const nearByItems = ref([])
  const getNearbyItems = async () => {
    const result = await get('/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearByItems.value = result.data
    }
  }
  return {
    nearByItems,
    getNearbyItems
  }
}
const useIconItemsEffect = () => {
  const iconItems = [
    {
      id: 1,
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/超市.png',
      text: '超市便利'
    },
    {
      id: 2,
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
      text: '菜市场'
    },
    {
      id: 3,
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
      text: '水果店'
    },
    {
      id: 4,
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
      text: '鲜花绿植'
    },
    {
      id: 5,
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
      text: '医药健康'
    },
    {
      id: 6,
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/家居.png',
      text: '家居时尚'
    },
    {
      id: 7,
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
      text: '烘培蛋糕'
    },
    {
      id: 8,
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/签到.png',
      text: '签到'
    },
    {
      id: 9,
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
      text: '大牌免运'
    },
    {
      id: 10,
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/红包.png',
      text: '红包套餐'
    }
  ]
  return {
    iconItems
  }
}
export default {
  name: 'Content',
  components: {
    ShopItem
  },
  setup () {
    const { iconItems } = useIconItemsEffect()
    const { nearByItems, getNearbyItems } = useNearbyEffect()
    getNearbyItems()
    return {
      nearByItems,
      iconItems
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../style/varible.scss';
.content {
  // padding: 0.12rem 0.18rem 0.16rem;
  .banner {
    box-sizing: border-box;
    width: 100%;
    padding: 0.12rem 0.18rem 0;
    background: $content-bg;
    &__img {
      width: 100%;
    }
  }
  .icons {
    width: 100%;
    padding-bottom: 0.16rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background: $content-bg;
    &__item {
      margin-top: 0.16rem;
      flex-basis: 0.48rem;
      height: 0.63rem;
      text-align: center;
      font-size: 12px;
      margin-right: 0.2rem;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
    &__img {
      width: 84%;
      margin-bottom: 0.06rem;
    }
    &__text {
      width: 100%;
      text-align: center;
    }
  }
  .nearby {
    margin-top: 10px;
    padding: 0.16rem 0.18rem;
    background: $content-bg;
    &__title {
      margin: 0;
      height: 0.25rem;
      line-height: 0.25rem;
      font-size: 0.18rem;
    }
    a {
      text-decoration: none;
      color: #333333;
    }
  }
}
</style>
