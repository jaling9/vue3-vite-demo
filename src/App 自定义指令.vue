<template>
  <div>
    <button @click="isShow = !isShow">切换{{ isShow }}</button>

    <div v-if="isShow" v-move="{ background: 'red' }" class="A">ahahhah</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Directive, DirectiveBinding } from 'vue'
// import Directive
type Dir = {
  background: string
}
const isShow = ref<boolean>(true)

const flag = ref<boolean>(true)
const vMove: Directive = {
  created() {
    console.log('created')
  },
  mounted(el: HTMLElement, dir: DirectiveBinding<Dir>) {
    console.log('mounted')
    el.style.background = dir.value.background
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  }
}
</script>
<style scope>
.A {
  width: 500px;
  height: 500px;
  background: white;
  /* color: #f78888; */
  text-align: center;
  font-size: 36px;
  border: 2px, solid, #f78888;
}
</style>
