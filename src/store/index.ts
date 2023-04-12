import { defineStore } from 'pinia'
import { Names } from './text' //抽离出去的名字最终还是需要引入回来store文件进行使用的

// 同步示例
interface User {
  name: string
  age: number
}
const result: User = {
  name: '飞机杯',
  age: 999
}

// 异步示例
const login = (): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: '飞机杯',
        age: 999999
      })
    }, 2000)
  })
}

export const useUserStore = defineStore(Names.User, {
  state: () => {
    return {
      user: <User>{},
      name: '小'
    }
  },
  getters: {
    myNewName(): string {
      return this.name + '满'
    },
    getUserAge(): number {
      return this.user.age
    }
  },
  actions: {
    setUser() {
      this.user = result
    },
    async setLoginUser() {
      this.user = await login()
      this.setName('大')
    },
    // setLoginUser() {
    //   login().then((res) => {
    //     this.user = res
    //   })
    // }
    setName(newName: string) {
      this.name = newName
    }
  }
})

export const useTestStore = defineStore(Names.Test, {
  state: () => {
    return {
      current: 1,
      name: '小满',
      age: 18,
      msg: {
        a: '这是对象里的信息',
        b: '这是对象里的信息b'
      }
    }
  },
  getters: {
    // getters are like computed properties
    // they are cached and only re-evaluated when their dependencies change
    // they are also reactive
    // they are exposed on the store.$ getters property
    // 类似于vue的计算属性，只有依赖的值发生变化才会重新计算，缓存，响应式，暴露在store.$getters属性上
  },
  actions: {
    // actions are like methods
    // they are not cached
    // they are not reactive
    // they are exposed on the store.$ actions property
    // 支持同步也支持异步
    setCurrent(val: number) {
      this.current = val
    }
  }
})
//通过源码我们可以看到这里是：
// state?:()=> S;//意思就是一个箭头函数，可选填入
