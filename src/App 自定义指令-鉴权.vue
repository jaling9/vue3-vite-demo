<template>
  <div class="btns">
    <p-Button v-has-show="'shop:create'">创建</p-Button>
    <p-Button v-has-show="'shop:edit'">编辑</p-Button>
    <p-Button v-has-show="'shop:delete'">删除</p-Button>
    <p-Button v-has-show="'shop:query'">查询</p-Button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Directive } from 'vue'
// 鉴权
localStorage.setItem('userID', 'xiaoman')
// mock后台返回的数据
const permission = [
  'xiaoman:shop:edit',
  'xiaoman:shop:delete',
  'xiaoman:shop:create',
  'xiaoman:shop:query'
]
const userID = localStorage.getItem('userID') as string
const vHasShow: Directive<HTMLElement, string> = (el, bingding) => {
  console.log(el, bingding)
  if (permission.includes(userID + ':' + bingding.value)) {
    el.style.display = 'none'
  }
}
</script>
<style scope lang="less">
.btn {
  button {
    margin-right: 10px;
  }
}
</style>
