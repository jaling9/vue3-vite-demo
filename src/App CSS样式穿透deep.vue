<template>
  <main>
    <el-input placeholder="测试代码" class="ipt"></el-input>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.ipt {
  width: 300px;
  margin: 10px 10px;
  :deep(.el-input__wrapper) {
    background: rgb(248, 244, 244);
    border: 2px solid rgb(42, 92, 242);
  }
  :deep(.el-input__inner) {
    border: 2px solid rgb(208, 22, 22);
    background: rgb(201, 236, 145);
  }
  box-shadow: rgb(219, 205, 205) 4px 4px 25px 1px;
}
</style>
