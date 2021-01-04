<!--
 * @Author: zhimin
 * @Date: 2020-12-31 14:15:01
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-04 10:19:12
 * @FilePath: \v-3\chap08\jingdong\src\views\register\Register.vue
-->
<template>
  <div class="wrapper">
    <div class="wrapper__img">
      <img
        src="http://www.dell-lee.com/imgs/vue3/user.png"
        alt="user_img"
      >
    </div>
    <div class="wrapper__input">
      <div class="wrapper__text">
        <input
          class="input__text"
          type="text"
          placeholder="请输入手机号"
        >
      </div>
      <div class="wrapper__text">
        <input
          class="input__text"
          type="password"
          placeholder="请输入密码"
        >
      </div>
      <div class="wrapper__text">
        <input
          class="input__text"
          type="password"
          placeholder="确认密码"
        >
      </div>
    </div>
    <div class="wrapper__register">
      <button
        class="register"
        @click="handleLogin"
      >注册</button>
    </div>
    <div class="wrapper__link">
      <span
        class="text login"
        @click="handleLoginClick"
      >已有账号去登录</span>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Register',
  setup () {
    const router = useRouter()
    const handleLogin = () => {
      localStorage.isLogin = true
      router.push({
        name: 'Home'
      })
    }
    const handleLoginClick = () => {
      router.push({ name: 'Login' })
    }
    return {
      handleLogin,
      handleLoginClick
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  background: #ffffff;
  overflow: hidden;
  &__img {
    width: 0.66rem;
    height: 0.66rem;
    line-height: 0.66rem;
    margin: 1.2rem auto 0;
    img {
      width: 100%;
      height: 100%;
      vertical-align: bottom;
    }
  }
  &__input {
    width: 2.95rem;
    margin: 0.4rem auto;
    font-size: 0.16rem;
    & .wrapper__text {
      width: 100%;
      margin-bottom: 0.16rem;
      overflow: hidden;
      & .input__text {
        box-sizing: border-box;
        margin: 0;
        padding: 0 0.16rem;
        width: 100%;
        height: 0.48rem;
        line-height: 0.48rem;
        background: #f9f9f9;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        outline: none;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  &__register {
    width: 2.95rem;
    height: 0.48rem;
    line-height: 0.48rem;
    font-size: 0.16rem;
    margin: 0.16rem auto 0.18rem;
    & .register {
      width: 100%;
      height: 100%;
      background: #0091ff;
      outline: none;
      border: none;
      color: #ffffff;
      box-shadow: 0 4px 8px 0 rgba(0, 145, 255, 0.32);
      border-radius: 4px;
      border-radius: 4px;
    }
  }
  &__link {
    width: 1.4rem;
    margin: 0 auto;
    text-align: center;
    font-size: 0.14rem;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
}
</style>
