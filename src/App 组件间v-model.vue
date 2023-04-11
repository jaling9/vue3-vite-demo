<template>
  <div class="haha">
    <h1>我是APP父组件</h1>
    <hr />
    <p>isShow:{{ isShow }}</p>
    <p>text:{{ text }}</p>
    <p-Button @click="isShow = !isShow">显示dialog</p-Button>

    <vModelVue v-model:textValue.isBT="text" v-model="isShow"></vModelVue>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import vModelVue from './components/v-model.vue'

const isShow = ref<boolean>(true)
const text = ref<string>('小满')
</script>
<style scope>
html,
body {
  margin: 0;
  padding: 0;
  width: 800px;
  height: 800px;
}
.haha {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background: #ccc;
}
h1,
p {
  text-align: center;
  color: #000;
}
</style>
