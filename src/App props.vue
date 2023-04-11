<template>
  <h1>父组件</h1>
  <br />
  <propsComponent
    ref="propsComponent"
    @on-click="getName"
    :arr="hah"
    :title="name"
  ></propsComponent>
  <h3>{{ getName }}</h3>
</template>

<script setup lang="ts">
import propsComponent from './components/propsComponent.vue'
import { ref, reactive } from 'vue'
const propsComponent = ref<typeof InstanceType>()
propsComponent.value.open()
console.log(propsComponent.value.myName)

const name = 'xiaoman'
const hah = [1, 2, 3, 4, 5]
const getName = (val: string) => {
  console.log(val)
}
</script>
<style style="css"></style>
