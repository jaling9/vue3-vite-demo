<template>
  <div>case1: <InputText type="text" v-model="message" /></div>
  <br />
  <div>case2: <InputText type="text" v-model="message2.foo.bar.name" /></div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

const message = ref<string>('xiaoman')
const message2 = reactive({
  foo: {
    bar: {
      name: 'xiaoman'
    }
  }
})

watch(
  [message, message2],
  (newValue, oldValue) => {
    console.log('case1: ', newValue, oldValue)
  },
  {
    deep: true, //深度监听
    flush: 'sync', //同步执行 默认异步 pre组件更新前执行 post组件更新后执行
    immediate: true // 立即执行
  }
)
</script>
<style scope></style>
