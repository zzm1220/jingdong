<!--
 * @Author: zhimin
 * @Date: 2020-12-31 14:15:01
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-05 10:21:41
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
          placeholder="请输入用户名"
          v-model="username"
        >
      </div>
      <div class="wrapper__text">
        <input
          class="input__text"
          type="password"
          placeholder="请输入密码"
          v-model="password"
        >
      </div>
      <div class="wrapper__text">
        <input
          class="input__text"
          type="password"
          placeholder="确认密码"
          v-model="checkPassword"
        >
      </div>
    </div>
    <div class="wrapper__register">
      <button
        class="register"
        @click="handleRegister"
      >注册</button>
    </div>
    <div class="wrapper__link">
      <span
        class="text login"
        @click="handleLoginClick"
      >已有账号去登录</span>
    </div>
    <Toast
      v-if="isShow"
      :msg="toastMsg"
    />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/request.js'
import Toast, { useToastEffect } from '../../components/Toast.vue'

const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    checkPassword: ''
  })
  const handleRegister = async () => {
    try {
      if (data.password !== data.checkPassword) {
        showToast('密码不一致')
        return
      }
      const result = await post('/user/register', {
        username: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        router.push({
          name: 'Login'
        })
      } else {
        showToast('注册失败')
      }
    } catch (e) {
      showToast(e)
    }
  }
  return {
    data,
    handleRegister
  }
}
const useGoLoginEffect = () => {
  const router = useRouter()
  const handleLoginClick = () => router.push({ name: 'Login' })
  return {
    handleLoginClick
  }
}
export default {
  name: 'Register',
  components: {
    Toast
  },
  setup () {
    const { isShow, toastMsg, showToast } = useToastEffect()
    const { handleLoginClick } = useGoLoginEffect()
    const { data, handleRegister } = useRegisterEffect(showToast)
    const { username, password, checkPassword } = toRefs(data)
    return {
      isShow,
      toastMsg,
      username,
      password,
      checkPassword,
      handleLoginClick,
      handleRegister
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
