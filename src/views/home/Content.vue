<!--
 * @Author: zhimin
 * @Date: 2020-12-31 10:19:06
 * @LastEditors: zhimin
 * @LastEditTime: 2020-12-31 11:18:48
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
      <div
        class="nearby__item"
        v-for="item in nearByItems"
        :key="item.title"
      >
        <img
          class="nearby__item__img"
          :src="item.imgSrc"
          :alt="item.title"
        />
        <div class="nearby__content">
          <h4 class="nearby__content__title">{{item.title}}</h4>
          <div class="nearby__content__items">
            <span
              class="item_text"
              v-for="tag in item.tags"
              :key="tag"
            >{{tag}}</span>
          </div>
          <div class="nearby__content__intro">
            {{item.intro}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  setup () {
    const nearByItems = [
      {
        id: 1,
        imgSrc: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        intro: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id: 2,
        imgSrc: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '山姆会员商店',
        tags: ['月售2千+', '起送¥0', '基础运费¥5'],
        intro: '联合利华洗护满10减5）'
      },
      {
        id: 3,
        imgSrc: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        intro: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id: 4,
        imgSrc: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '山姆会员商店',
        tags: ['月售2千+', '起送¥0', '基础运费¥5'],
        intro: '联合利华洗护满10减5）'
      }
    ]
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
    &__item {
      margin-top: 0.14rem;
      width: 100%;
      display: flex;
      &__img {
        width: 0.56rem;
        height: 0.56rem;
      }
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
}
</style>
