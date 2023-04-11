<template>
  <div>
    <!-- <form>
      <input type="text" v-model="form.name" />
      <br />
      <input type="text" v-model="form.age" />
      <br />
      <button @click="submit">提交</button>
    </form> -->
    <ul>
      <!-- <li v-for="item in list">姓名：{{ item.name }} 年龄：{{ item.age }}</li> -->
      <li v-for="item in list">姓名：{{ item }}</li>
    </ul>
    <button @click="add">submit</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, readonly, shallowReactive } from 'vue'
// ref支持所有类型
// reactive只支持引用类型 Array Object Map Set
// ref 取值赋值都需要加.value   reactive不需要
// reactive  proxy对象 不能去直接赋值 否则会破环响应式
// 解决办法 1、数组可以使用push方法  2、把它变成对象的属性上的数组

// readonly 只读
const form = reactive({
  name: '',
  age: 0
})
const read = readonly(form)
read.name = 'daman'

let list = reactive<{ arr: string[] }>({ arr: [] })
// list.name = 'lisi'
const add = () => {
  setTimeout(() => {
    let res = ['zhangsan', 'lisi', 'wangwu', 'zhaoliu', 'tianqi', 'zhuba']
    list.arr = res
    console.log(list)
  }, 100)
  // list.push({
  //   name: 'wangwu',
  //   age: 20
  // })
}
</script>
<style scope></style>
