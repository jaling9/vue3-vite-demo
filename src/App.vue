<template>
  <div>hello pinia!{{ Test.current }}</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useTestStore } from './store'
const Test = useTestStore()
</script>
<style scope></style>
