<template>
  <h1>父组件</h1>
  <br />
  <propsComponent
    ref="dataFromDefineExpose"
    @on-click="getName"
    :arr="hah"
    :title="name"
  ></propsComponent>
</template>

<script setup lang="ts">
import propsComponent from './components/propsComponent.vue'
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
const dataFromDefineExpose = ref<InstanceType<typeof propsComponent>>()

onMounted(() => {
  // 发现一个大坑 不能在onMounted外面直接读取dataFromDefineExpose的值
  // 发现一个大坑 不能在onMounted外面直接读取dataFromDefineExpose的值
  // 发现一个大坑 不能在onMounted外面直接读取dataFromDefineExpose的值
  // 发现一个大坑 不能在onMounted外面直接读取dataFromDefineExpose的值
  // 发现一个大坑 不能在onMounted外面直接读取dataFromDefineExpose的值
  console.log(dataFromDefineExpose)
  console.log(dataFromDefineExpose.value?.myName)
  console.log(dataFromDefineExpose.value?.open())
})
//然后就可以读取到了
console.log(dataFromDefineExpose)
console.log(dataFromDefineExpose.value?.myName)
console.log(dataFromDefineExpose.value?.open())
//父组件能通过defineExpose就能够读取到子组件的属性，或者调子组件的方法

// propsComponent1.value.open()
// console.log(propsComponent1.value.myName)

const name = 'xiaoman'
const hah = [1, 2, 3, 4, 5]
const getName = (val: string) => {
  console.log(val)
}
</script>
<style style="css"></style>
