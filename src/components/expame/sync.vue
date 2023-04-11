<template>
  <div class="sync">
    <div class="sync-content">
      <div><img :src="data.url" alt="" /></div>
      <div class="sync-pop">
        <div>{{ data.name }}</div>
        <div>&nbsp;{{ data.age }}</div>
      </div>
    </div>
    <hr />
    <div>{{ data.desc }}</div>
  </div>
</template>

<script setup lang="ts">
import { axios } from '@/server/axios'
import { ref, reactive } from 'vue'

interface Data {
  data: {
    name: string
    age: number
    url: string
    desc: string
  }
}

const { data } = await axios.get<Data>('/data.json')
</script>
<style scope></style>
