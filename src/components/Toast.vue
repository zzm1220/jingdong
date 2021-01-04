<!--
 * @Author: zhimin
 * @Date: 2021-01-04 16:41:29
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-04 17:25:20
 * @FilePath: \v-3\chap08\jingdong\src\components\Toast.vue
-->
<template>
  <div>
    <div class="toast">
      {{msg}}
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  props: {
    msg: {
      type: String,
      default: 'error'
    }
  }
}
export const useToastEffect = () => {
  const toastData = reactive({
    isShow: false,
    toastMsg: ''
  })
  const showToast = message => {
    toastData.toastMsg = '登录失败'
    toastData.isShow = true
    setTimeout(() => {
      toastData.isShow = false
      toastData.toastMsg = ''
    }, 2000)
  }
  const { isShow, toastMsg } = toRefs(toastData)
  return {
    isShow,
    toastMsg,
    showToast
  }
}
</script>

<style scoped lang="scss">
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 0.1rem;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.35);
  border-radius: 0.05rem;
  color: #ffffff;
  font-size: 0.16rem;
}
</style>
