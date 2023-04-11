<template>
  <div class="content">内容区域</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>
<style style="less" scope>
.content {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #b1b5ff;
  border-right: #b1b5ff 1px solid;
  overflow: hidden;
  &-right {
    flex: 1;
  }
}
</style>
