<!--
 * @Author: zhimin
 * @Date: 2020-12-29 10:04:54
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-21 14:45:13
 * @FilePath: \v-3\chap08\jingdong\src\views\home\Home.vue
-->
<template>
  <div class="wrapper">
    <Header />
    <Content />
    <Footer />
  </div>
</template>
<script>
import Header from './Header.vue'
import Content from './Content.vue'
import Footer from '../../components//Footer.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Content,
    Footer
  }
}
</script>
<style scoped lang="scss">
@import '../../style/varible.scss';
.wrapper {
  background: $wrapper-bg;
  color: $font-color;
  font-size: $font-size;
  overflow-y: auto;
}
</style>
