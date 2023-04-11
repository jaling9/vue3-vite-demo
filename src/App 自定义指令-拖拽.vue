<template>
  <div v-move class="box">
    <div class="header">
      <div>内容</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DirectiveBinding } from 'vue'
import { ref, reactive } from 'vue'
import type { Directive } from 'vue'
const vMove: Directive<any, void> = (el: HTMLElement, bingding: DirectiveBinding) => {
  const moveElement: HTMLDivElement = el.firstElementChild as HTMLDivElement
  console.log(moveElement)
  const mouseDown = (e: MouseEvent) => {
    let X = e.clientX - el.offsetLeft
    let Y = e.clientY - el.offsetTop
    const move = (e: MouseEvent) => {
      console.log(e)
      el.style.left = e.clientX - X + 'px'
      el.style.top = e.clientY - Y + 'px'
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move)
    })
  }
  moveElement.addEventListener('mousedown', mouseDown)
}
</script>
<style scope lang="less">
.box {
  position: fixed;
  width: 400px;
  height: 400px;
  background-color: #ccc;
  .header {
    width: 100%;
    height: 50px;
    background-color: rgb(0, 42, 255);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
