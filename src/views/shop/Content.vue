<!--
 * @Author: zhimin
 * @Date: 2021-01-06 09:56:35
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-19 14:19:53
 * @FilePath: \v-3\chap08\jingdong\src\views\shop\Content.vue
-->
<template>
  <div class="content">
    <ul class="category">
      <li
        v-for="category in categories"
        :key="category.id"
        :class="{'category__item':true,'category__item--active':currentTab===category.tab}"
        @click="handleCategoryClick(category.tab)"
      >
        {{category.name}}
      </li>
    </ul>
    <div class="products">
      <div
        class="products__item"
        v-for="product in products"
        :key="product._id"
      >
        <img
          class="products__item__img"
          :src="product.imgSrc"
          :alt="product.title"
        />
        <div class="products__item__intro">
          <p class="title">{{product.title}}</p>
          <p class="sales">{{product.sales}}</p>
          <div class="price">
            <span class="cur-price">{{product.curPrice}}</span>
            <span class="origin-price">{{product.originPrice}}</span>
            <div class="order">
              <span
                class="icon minus"
                @click="minusToCart(shopId, product._id, product,shopName)"
              >-</span>
              <span>{{cartList?.[shopId]?.productList?.[product._id]?.count || 0}}</span>
              <span
                class="icon plus"
                @click="addToCart(shopId, product._id, product,shopName)"
              >+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, watchEffect } from 'vue'
import { get } from '../../utils/request'
import { useCommonCartEffect } from './commonCartEffect'

// 商品category切换
const useCategoryEffect = () => {
  const categoriesData = reactive({
    categories: [{
      id: 1,
      name: '全部商品',
      tab: 'all'
    }, {
      id: 2,
      name: '秒杀',
      tab: 'seckill'
    }, {
      id: 3,
      name: '新鲜水果',
      tab: 'fruit'
    }],
    currentTab: 'all'
  })
  const handleCategoryClick = (tab) => {
    categoriesData.currentTab = tab
  }
  const { categories, currentTab } = toRefs(categoriesData)
  return {
    categories,
    currentTab,
    handleCategoryClick
  }
}
// 商品products列表
const useProductsEffect = (id, currentTab) => {
  const products = reactive([])
  const getProducts = async () => {
    const result = await get(`/shop/${id}/products`, {
      tab: currentTab.value
    })
    if (result?.errno === 0 && result?.products) {
      products.push(...result.products)
    }
  }
  watchEffect(() => { getProducts() })
  return {
    products,
    getProducts
  }
}

export default {
  name: 'Content',
  props: {
    shopId: {
      type: String
    },
    shopName: {
      type: String
    }
  },
  setup (props) {
    const { shopId } = toRefs(props)
    const { categories, currentTab, handleCategoryClick } = useCategoryEffect()
    const { products } = useProductsEffect(shopId, currentTab)
    const { cartList, addItemNumToCart, minusItemNumFromCart, setShopName } = useCommonCartEffect()

    const addToCart = (shopId, productId, product, shopName) => {
      addItemNumToCart(shopId, productId, product)
      setShopName(shopId, shopName)
    }
    const minusToCart = (shopId, productId, product, shopName) => {
      minusItemNumFromCart(shopId, productId, product)
      setShopName(shopId, shopName)
    }
    return {
      cartList,
      currentTab,
      categories,
      products,
      handleCategoryClick,
      addToCart,
      minusToCart
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../style/mixins';
.content {
  display: flex;
  position: absolute;
  top: 1.54rem;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  .category {
    overflow-y: scroll;
    flex-basis: 0.76rem;
    height: 100%;
    background: #f5f5f5;
    color: #333333;
    font-size: 0.14rem;
    &__item {
      width: 100%;
      height: 0.4rem;
      line-height: 0.4rem;
      text-align: center;
      border-radius: 0.02rem;
      &--active {
        background: #ffffff;
      }
    }
  }
  .products {
    overflow-y: scroll;
    flex: 1;
    &__item {
      display: flex;
      flex: 1;
      box-sizing: border-box;
      padding: 0.12rem 0.18rem;
      border-bottom: 1px solid #f1f1f1;
      &__img {
        width: 0.68rem;
        height: 0.68rem;
        margin-right: 0.16rem;
      }
      &__intro {
        flex: 1;
        overflow: hidden;
        .title {
          font-family: PingFangSC-Medium;
          font-size: 14px;
          color: #333333;
          line-height: 0.2rem;
          margin-bottom: 0.06rem;
          @include ellipsis;
        }
        .sales {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #333333;
          line-height: 0.16rem;
          margin-bottom: 0.06rem;
        }
        .price {
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
          .order {
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
    }
  }
}
</style>
