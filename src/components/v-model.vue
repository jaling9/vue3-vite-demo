<template>
  <div v-if="modelValue" class="model">
    <!-- <div>{{ modelValue }}</div> -->
    <div class="close"><p-Button @click="closeDialog">关闭</p-Button></div>
    <h3 style="color: black">我是v-model子组件 dialog</h3>
    <div>v-model内容：<InputText @click="change" type="text" :value="textValue" /></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const props = defineProps<{
  modelValue: boolean
  textValue: string
  textValueModifiers?: {
    isBT: boolean
  }
}>()

const emit = defineEmits(['update:modelValue', 'update:textValue'])

const closeDialog = () => {
  emit('update:modelValue', false)
}

const change = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:textValue', props?.textValueModifiers?.isBT ? target.value + '变态' : target.value)
}
</script>
<style scope>
.model {
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */

  width: 300px;
  height: 200px;
  background: #fff;
  border-radius: 5px;
  /* position: absolute; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.close {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: right;
  padding-right: 10px;
}
</style>
