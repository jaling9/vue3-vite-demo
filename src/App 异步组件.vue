<template>
  <Suspense>
    <template #default>
      <SyncVue></SyncVue>
    </template>
    <template #fallback>
      <sketetonVue></sketetonVue>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue'
import sketetonVue from '@/components/expame/sketeton.vue'
const SyncVue = defineAsyncComponent(() => import('@/components/expame/sync.vue'))
</script>
<style scope></style>
