import { defineStore } from 'pinia'
import { Names } from './text' //抽离出去的名字最终还是需要引入回来store文件进行使用的

export const useTestStore = defineStore(Names.Test, {
  state: () => {
    return {
      current: '晚上好',
      name: '小满',
      age: 18
    }
  },
  getters: {
    // getters are like computed properties
    // they are cached and only re-evaluated when their dependencies change
    // they are also reactive
    // they are exposed on the store.$ getters property
  },
  actions: {
    // actions are like methods
    // they are not cached
    // they are not reactive
    // they are exposed on the store.$ actions property
  }
})
//通过源码我们可以看到这里是：
// state?:()=> S;//意思就是一个箭头函数，可选填入
