<template>
  <div>Ref：{{ Man }}</div>
  <br />
  <div>shallowRef：{{ Man2 }}</div>
  <br />
  <div>customRef:{{ obj }}</div>
  <dir ref="dom">我是DOM元素 被ref获取了</dir>
  <button @click="change">修改</button>
  <button @click="change2">修改custRef的值</button>
</template>

<script setup lang="ts">
// ref全家桶
import { ref, isRef, shallowRef, triggerRef, customRef } from 'vue'
// ref 深沉响应式 并且可以获取DOM元素
// shallowRef 浅响应式 跟Ref不能混着写，不然会造成视图的更新
// triggerRef 手动触发视图更新,强制更新
// customRef 自定义响应式

// isRef 判断是否是ref类型
// import type { Ref } from 'vue'
// 使用isRef判断是否是ref类型
// const obj2 = ref<string>('xiaoman')
const dom = ref<HTMLDivElement>()
console.log(dom.value?.innerText)
function MyRef<T>(value: T) {
  let timer: any
  return customRef((track, trigger) => {
    return {
      get() {
        track() // 收集依赖
        return value
      },
      set(newValue) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          // 防抖 防止别人一直瞎点  造成性能浪费
          console.log('newValue', newValue)
          value = newValue
          timer = null
          trigger() // 触发更新
        }, 300)
      }
    }
  })
}
const obj = MyRef<string>('xiaoman')
type M = {
  name: string
}
const Man = ref<M>({ name: 'xiaoman' })
const Man2 = shallowRef<M>({ name: 'xiaoman' })
const change = () => {
  // Man.value.name = 'xiaoman2'
  Man2.value.name = 'xiaoman2'
  triggerRef(Man2)
  // Man2.value = {
  //   // 浅响应式，只能修改对象本身，不能修改对象的属性
  //   name: 'xiaoman2'
  // }
  console.log(Man, dom.value?.innerText)
}
const change2 = () => {
  obj.value = 'xiaoman2-->customRef'
}
</script>
<style scope></style>
