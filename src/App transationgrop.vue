<template>
  <div>
    <!-- <p-Button @click="show = !show">切换</p-Button>
    <Transition
      :duration="5000"
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__fadeOutDown"
    >
      <keep-alive>
        <div v-if="show" class="box"></div>
      </keep-alive>
    </Transition> -->
    <div>
      <p-Button @click="addOne">添加</p-Button> <p-Button @click="removeOne">删除</p-Button>
    </div>
    <div class="boxElement1">
      <TransitionGroup
        enter-active-class="animate__animated animate__zoomIn"
        leave-active-class="animate__animated animate__zoomOutDown"
        name="fade"
        tag="div"
        class="boxElement"
      >
        <div
          v-for="item in list"
          :key="item"
          class="box"
          @click="list.splice(list.indexOf(item), 1)"
        >
          {{ item }}
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// 导入动画库
import 'animate.css'

// const show = ref<boolean>(true)
const list = reactive<number[]>([1, 2, 3, 4])

const addOne = () => {
  list.push(list.length + 1)
}
const removeOne = () => {
  list.pop()
}
</script>
<style scope>
.boxElement1 {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.boxElement {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  margin: 20px;
  width: 200px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  border: solid 2.5px rgb(61, 58, 58);
  background-color: #ffffff;
  position: relative;
  box-shadow: 15px 9px 20px 1px rgba(162, 160, 247, 0.21);
}
.box:hover {
  background-color: #514eff;
  box-shadow: 15px 9px 20px 1px rgba(162, 160, 247, 0.41);
}
/* .fade-enter-from {
  width: 0;
  height: 0;
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1.5s ease-out, width 1.5s ease-out, height 1.5s ease-out;
}
/* fade-enter-to {
  opacity: 0;
  width: 400px;
  height: 400px;
} */
/* .fade-leave-active {
  transition: opacity 0.5s; 
} */
</style>
