<template>
  <div class="layout">
    <Menu class="layout-menu"></Menu>
    <div><Header class="layout-Header"></Header> <Content class="layout-content"></Content></div>
  </div>
</template>

<script setup lang="ts">
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import Content from './Comtent/index.vue'

import { ref, reactive } from 'vue'
</script>
<style style="less" scope>
.layout {
  display: flex;
  height: 100%;
  /* flex-direction: row; */
  overflow: hidden;
}
</style>
