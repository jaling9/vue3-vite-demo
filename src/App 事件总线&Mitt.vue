<template>
  <div>
    <bus-a @on-click="getFlag"></bus-a>
    <bus-b :flag="Flag"></bus-b>
  </div>
</template>

<script setup lang="ts">
import busA from './components/BusA.vue'
import busB from './components/BusB.vue'
import { ref, reactive } from 'vue'
const Flag = ref(false)
const getFlag = (params: boolean) => {
  console.log(params)
  Flag.value = params
}
</script>
<style scope></style>
