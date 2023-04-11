<template>
  <div class="sk">
    <div class="sk-2">
      <div></div>
      <div></div>
    </div>
    <hr />
    <div class="sk-3"></div>
    <div class="sk-3"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>
<style scope>
.sk {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sk-2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sk-2 > div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sk-2 > div > div {
  width: 100%;
  height: 100%;
  background-color: #eee;
  border-radius: 4px;
}
.sk-2 > div > div:nth-child(1) {
  width: 50%;
  height: 50%;
}
.sk-2 > div > div:nth-child(2) {
  width: 80%;
  height: 80%;
}
.sk-3 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sk-3:nth-child(1) {
  width: 50%;
  height: 50%;
  background-color: #eee;
  border-radius: 4px;
}
.sk-3:nth-child(2) {
  width: 80%;
  height: 80%;
  background-color: #eee;
  border-radius: 4px;
}
</style>
