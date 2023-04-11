<template>
  <div>
    <!-- 基本 -->
    <keep-alive>
      <component :is="view"></component>
    </keep-alive>

    <!-- 多个条件判断的子组件 -->
    <keep-alive>
      <comp-a v-if="a > 1"></comp-a>
      <comp-b v-else></comp-b>
      //v-if与else的切换组件，切换后另外一个组件虽然被切换走了，但是通过声明周期我们可以看到不会被销毁
    </keep-alive>

    <!-- 和 `<transition>` 一起使用 -->
    <transition>
      <keep-alive>
        <component :is="view"></component>
      </keep-alive>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>
<style scope></style>
