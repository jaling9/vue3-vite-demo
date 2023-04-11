<template>
  <div>
    {{ man }}
  </div>
  <br />
  <button @click="change">点击修改</button>
</template>

<script setup lang="ts">
import { toRef, reactive, toRefs, toRaw } from 'vue'
// toRef只能修改响应式对象的值 非响应式没屌用
// torefs跟toref类似
// 应用场景是类似解构赋值的时候
const toRefs = <T extends object>(Object: T) => {
  const map: any = {}
  for (const key in Object) {
    map[key] = toRef(Object, key)
  }
  return map
}

// toRaw 可以获解除对象的响应式
const man = reactive({ name: 'zhangsan', age: 18, like: 'football' })
let { name, age, like } = toRefs(man)
const change = () => {
  man.like = 'basketball'
  console.log(man)
  console.log(name, age, like) // 单独拎了出来
  console.log(toRaw(man)) // 解除响应式));
}
</script>
<style scope></style>
