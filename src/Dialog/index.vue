<template>
  <div>
    <header class="header">
      <slot name="header"></slot>
    </header>
    <main class="main">
      <div v-for="item in data">
        <slot :data="item"></slot>
      </div>
    </main>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

type names = {
  name: string
  age: number
}

const data = reactive<names[]>([
  {
    name: 'zhangsan',
    age: 18
  },
  {
    name: 'lisi',
    age: 20
  },
  {
    name: 'wangwu',
    age: 22
  },
  {
    name: 'zhaoliu',
    age: 24
  },
  {
    name: 'tianqi',
    age: 26
  }
])
</script>
<style scope>
.header {
  width: 400px;
  height: 50px;
  background-color: #f00;
}
.main {
  width: 400px;
  height: 200px;
  background-color: #0f0;
}
.footer {
  width: 400px;
  height: 50px;
  background-color: #00f;
}
</style>
