import { track, trigger } from './effect.js'

export const reactive = <T extends object>(target: T) => {
  return new Proxy(target, {
    get(target, key, receiver) {
      // Reflect 给对象取值的方法
      const result = Reflect.get(target, key, receiver)
      //   track(target, key)
      return result
    },
    set(target, key, value) {
      const result = Reflect.set(target, key, value)
      //   trigger(target, key)
      return result
    }
  })
}
