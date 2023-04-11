<template>
  <h2>生命周期</h2>
  <thisComponent v-if="flag"></thisComponent>
  <br />
  <div ref="divHello">{{ str }}</div>
  <br />
  <p-Button @click="changeStr">change</p-Button>
  <br />
  <p-Button @click="flag = !flag">创建和销毁</p-Button>
</template>

<script setup lang="ts">
import thisComponent from './components/propsComponent.vue'
import { ref, reactive } from 'vue'
// 生命周期钩子
import {
  onMounted,
  onBeforeMount,
  onBeforeUnmount,
  onUnmounted,
  onBeforeUpdate,
  onUpdated,
  onActivated,
  onDeactivated,
  onRenderTracked,
  onRenderTriggered,
  onErrorCaptured,
  onServerPrefetch
} from 'vue'
// beforCreate craeted setup语法糖模式没有这两个生命周期的 使用setup函数代替
// onBeforeMount 读不到dom元素 使用onMounted可以读到dom元素
// onbeforeUpdate 获取的是旧的dom元素 使用onUpdated可以获取到新的dom元素
console.log('setup')
const str = ref<string>('hello')
const divHello = ref<HTMLDivElement>()
const changeStr = () => {
  str.value = '我被改变了'
  console.log(str.value)
}
const flag = ref<boolean>(true)

// 创建
onBeforeMount(() => {
  console.log('beforeMount')
})
onMounted(() => {
  console.log('mounted')
})
// 更新
onBeforeUpdate(() => {
  console.log('beforeUpdate')
})
onUpdated(() => {
  console.log('updated')
})
// 卸载
onBeforeUnmount(() => {
  console.log('beforeUnmount')
})
onUnmounted(() => {
  console.log('unmounted')
})
</script>
<style scope></style>
