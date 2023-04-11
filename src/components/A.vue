<template>
  <div class="A">
    <p-Button @click="change">change falg</p-Button>
    <p-Button @click="change">change color</p-Button>
    <hr />
    <div>{{ flag }}</div>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref, ref } from 'vue' //使用inject去读取

const flag = inject<Ref<number>>('flag', ref(1)) //引入Ref类型，然后Ref类型支持number，这里会显示flag:Ref<number>|undefined，如果不想要undefined，也可以断言一下
const color = inject<Ref<string>>('color', ref('red'))

const change = () => {
  flag.value++ //传值的话，比如字符串这类可能不符合，解决方法1：类型可以非空断言(!.)一下，可选操作符这里用不了。方法2：在上方的1的地方套上ref。这里采用第二种方法
  color.value = 'blue'
}
</script>

<style>
.A {
  width: 500px;
  height: 500px;
  background: v-bind(color);
  color: #f78888;
  text-align: center;
  font-size: 36px;
}
</style>
