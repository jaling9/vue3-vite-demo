<template>
  <div class="App">
    <p-Button>我是App</p-Button>
    <hr />
    <A></A>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import A from './components/A.vue'

let flag = ref<number>(1)

const color = ref<string>('red')

provide('flag', flag) //接收两个参数，一个是key，一个是value(这个在template中绑定对应的数据也就是你要传给后代组件的信息，单项绑定双向绑定都行)

provide('color', color)
</script>

<style>
.App {
  width: 500px;
  height: 500px;
  background: rgb(255, 228, 228);
  color: #fff;
}
</style>
