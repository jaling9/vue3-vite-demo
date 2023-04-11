<template>
  <div>
    <Diglog>
      <template v-slot:header>
        <div style="color: black">我是具名插槽 !!!😀</div>
      </template>
      <template v-slot="{ data }">
        <div style="color: black">我是作用域插槽!!!{{ data.name }}😀{{ data.age }}</div>
      </template>
      <template #footer>
        <div style="color: black">我是具名插槽!!!😀</div>
      </template>
    </Diglog>
  </div>
</template>

<script setup lang="ts">
import Diglog from './Dialog/index.vue'
import { ref, reactive } from 'vue'
</script>
<style>
body {
  background-color: aliceblue;
}
</style>
