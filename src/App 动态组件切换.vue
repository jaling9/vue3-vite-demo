<template>
  <div style="display: flex">
    <p-Button
      @click="
        () => {
          comID = item.com
          active = index
        }
      "
      class="[active==index ?'active':'']"
      v-for="(item, index) in data"
      :key="index"
      style="
        margin: 10px;
        display: flex;
        /* background-color: deepskyblue; */
        justify-content: center;
        align-items: center;
        cursor: pointer;
      "
    >
      <div>{{ item.name }}</div>
    </p-Button>
  </div>
  <component :is="comID"></component>
</template>

<script setup lang="ts">
import A from './components/dynamic/A.vue'
import B from './components/dynamic/B.vue'
import C from './components/dynamic/C.vue'

import { ref, reactive, markRaw } from 'vue'

const comID = ref(A)

const active = ref(0)

const data = reactive([
  {
    name: 'A组件',
    com: markRaw(A)
  },
  {
    name: 'B组件',
    com: markRaw(B)
  },
  {
    name: 'C组件',
    com: markRaw(C)
  }
])
</script>
<style scope>
.active {
  background-color: rgb(60, 47, 240);
}
</style>
