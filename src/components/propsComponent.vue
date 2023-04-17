<template>
  <h2>这是一个子组件 好家伙</h2>
  <h3>值：{{ title }}</h3>
  <h3>值：{{ arr }}</h3>
  <p-Button @click="send">给父组件传值</p-Button>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { defineProps, defineEmits, defineExpose, withDefaults } from 'vue'
// defineProps作用是接受父组件传递的值
// withDefaults作用是给子组件传递默认值
defineProps<{ title: string; arr: number[] }>(),
  {
    title: '这是一个子组件',
    arr: [1, 2, 3]
  }
// withDefaults(defineProps<{ title: string; arr: number[] }>(), {
//   title: '这是一个子组件',
//   arr: [1, 2, 3]
// })
// const props = defineProps({
//   title: {
//     type: String,
//     default: '这是一个子组件'
//   }
// })
// console.log(props.title)
// 给父组件暴露一些方法使用defineExpose
defineExpose({
  myName: '我是子组件暴露的属性',
  open() {
    console.log('我是子组件暴露的方法')
  }
})
// 给父组件传值使用defineEmits
const emit = defineEmits<{ (e: 'on-click', val: string): void }>()
const send = () => {
  emit('on-click', '我是子组件传递的事件')
}
</script>
<style scope></style>
