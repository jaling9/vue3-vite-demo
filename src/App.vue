<template>
  <div>
    <div>
      <h2>原始值具有响应式：hello {{ Test.name }}!{{ Test.current }}</h2>
      <h2>解构出的值不具有响应式：hello {{ name }}!{{ current }}</h2>
      <div id="my">{{ Test.msg.a }}</div>
      <p-Button @click="change">change</p-Button>
      <p-Button @click="reset">reset</p-Button>
    </div>
    <div>
      <div>
        <h2>
          {{ User.name }} {{ User.user.name }}要卖{{ User.user.age }}元，我{{
            User.name
          }}某人买不起！！！！
        </h2>
        <h2>{{ User.getUserAge }}元{{ User.myNewName }}不行了！！！</h2>

        <p-Button @click="buy">action</p-Button>
        <p-Button @click="reset">reset</p-Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useTestStore, useUserStore } from './store'
const Test = useTestStore()
const User = useUserStore()
const buy = () => {
  User.setUser()
  User.setLoginUser()
}

// pinia解构不具有响应式  使用storetoRefs解决
import { storeToRefs } from 'pinia'
const { current, name, ...args } = storeToRefs(Test)

//  修改state的五种方式
// 1. 直接修改
// 2. $patch修改
// 3. $patch函数写法(state)=>{}
// 4. $state直接修改对象 （用的不多）
// 5. 通过action修改 定义方法setCurrent
const change = () => {
  Test.current++ // 直接修改
  ///////////////////////////////////////////////
  // Test.$patch({ current: 999, name: 'pinia' })
  ///////////////////////////////////////////////
  // Test.$patch((state) => {
  //   state.current = 1000
  //   state.name = 'pinia vue3'
  // })
  ///////////////////////////////////////////////
  // Test.$state = {
  //   current: 2000,
  //   name: 'pinia vue3 2000',
  //   age: 18,
  //   msg: {
  //     a: '这是对象里的信息',
  //     b: '这是对象里的信息b'
  //   }
  // }
  ///////////////////////////////////////////////
  // Test.setCurrent(3000000)
  // console.log(current, name, args)
}

//  使用reset()重置state
const reset = () => {
  User.$reset()
  Test.$reset()
}

// 使用$subscribe监听state变化
Test.$subscribe((state) => {
  console.log('state变化了', state)
})

// 使用$onAction监听actions
// after args onError store
User.$onAction((action) => {
  console.log('action变化了', action)
  action.after(() => {
    console.log('action')
  })
})
</script>
<style scope lang="less">
h2 {
  color: rgb(10, 147, 88);
}

#my {
  color: rgb(136, 136, 146);
}
</style>
