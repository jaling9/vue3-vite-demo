<template>
  <div class="B">
    <!-- <p>B组件收事件！</p> -->
    {{ Flag }}
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// type Props = {
//   flag: boolean
// }
// const props = defineProps<Props>()

// 使用bus来接受事件
import Bus from '../components/bus'
const Flag = ref(false)
Bus.on('on-click', (flag: boolean) => {
  Flag.value = flag
})
</script>
<style scope>
.B {
  width: 200px;
  height: 200px;
  background-color: aqua;
  text-align: center;
  justify-content: center;
  font-size: 48px;
}
</style>

<!-- <template>
    <div>
        <h1>我是B</h1>
    </div>
</template>

<script setup lang='ts'>
import { getCurrentInstance } from 'vue'//引入
//getCurrentInstance允许访问对高级用法或库创建者有用的内部组件实例。
const instance = getCurrentInstance()
instance?.proxy?.$Bus.on('on-num', (num) => {//监听on-num这个自定义事件
    console.log(num,'===========>B')
})
</script>

<style>
</style> -->
