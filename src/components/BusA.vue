<template>
  <div class="A">
    <p-Button v-on:click="emitB">A组件派发一个事件！</p-Button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// const emit = defineEmits(['on-click'])

// 使用bus来接受事件
import Bus from '../components/bus'

const flag = ref(false)
const emitB = () => {
  flag.value = !flag.value
  //   emit('on-click', flag)
  Bus.emit('on-click', flag)
}
</script>
<style scope>
.A {
  width: 200px;
  height: 200px;
  background-color: rgb(255, 85, 0);
}
</style>

<!-- 事件总线mitt库 -->
<!-- <template>
    <div>
        <h1>我是A</h1>
        <button @click="emit1">emit1，通过点击事件来触发派发</button>
        <button @click="emit2">emit2</button>
    </div>
</template>

<script setup lang='ts'>
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance();//初始化getCurrentInstance函数
const emit1 = () => {
    //emit(自定义事件，参数...)参数可以用...args解构
    instance?.proxy?.$Bus.emit('on-num', 100)//？可选
}
const emit2 = () => {
    instance?.proxy?.$Bus.emit('*****', 500)
}
</script>

<style>
</style> -->
