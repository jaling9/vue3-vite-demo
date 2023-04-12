import { defineStore } from 'pinia'
import { getApiList } from '../server'
export const useStore = defineStore({
  id: 'counter',
  state: () => ({
    list: {}
  }),
  actions: {
    async getList() {
      const res = await getApiList()
      this.list = res
    }
  }
})

// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
