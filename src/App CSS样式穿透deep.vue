<!--
 * @Author: blurryFace9 50992587+jaling9@users.noreply.github.com
 * @Date: 2023-03-23 20:28:01
 * @LastEditors: blurryFace9 50992587+jaling9@users.noreply.github.com
 * @LastEditTime: 2023-04-11 19:56:19
 * @FilePath: \vue3-vite-demo\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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
