<!--
 * @Author: zhimin
 * @Date: 2020-12-31 10:11:43
 * @LastEditors: zhimin
 * @LastEditTime: 2020-12-31 10:15:04
 * @FilePath: \v-3\chap08\jingdong\src\views\home\Header.vue
-->
<template>
  <div class="header">
    <div class="position">
      <span class="iconfont position__icon">&#xe614;</span>
      <span class="position__text">北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层</span>
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
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    };
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
@import '../../style/varible.scss';
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
</style>
