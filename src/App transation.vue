<template>
  <div>
    <p-Button @click="show = !show">切换</p-Button>
    <Transition
      :duration="5000"
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__fadeOutDown"
    >
      <keep-alive>
        <div v-if="show" class="box"></div>
      </keep-alive>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// 导入动画库
import 'animate.css'

const show = ref<boolean>(true)
</script>
<style scope>
.box {
  width: 200px;
  height: 200px;
  background-color: rgb(252, 210, 210);
  border-radius: 16px;
  box-shadow: 10px 5px 25px 5px rgb(195, 195, 195);
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
