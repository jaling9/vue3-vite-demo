<template>
  <div>
    <div class="imgBox">
      <!-- 遍历出这些图片 -->
      <img width="400" v-lazy="item" alt="" v-for="item in arr" :key="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// import type { Reacord } from 'vue'
import type { Directive } from 'vue'
// 批量引入图片 glob是懒加载 globEager是同步加载
const imageList: Reacord<string, { default: string }> = import.meta.globEager('./assets/images/*.*')
const arr = Object.values(imageList).map((v) => v.default)
console.log(arr)

let vLazy: Directive<HTMLImageElement, string> = async (el, bingding) => {
  const def = await import('./assets/logo.svg')
  el.src = def.default
  // console.log(el)
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0) {
      // setTimeout(() => {
      el.src = bingding.value
      // }, 2000)
      observer.unobserve(el)
    }
  })
  observer.observe(el)
}
</script>
<style scope lang="less">
.imgBox {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  img {
    margin-bottom: 20px;
  }
}
</style>
