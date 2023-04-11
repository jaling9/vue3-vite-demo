let activeEffect: Function | null = null
export const effect = (fn: Function) => {
  const _effect = function () {
    activeEffect = _effect
    fn()
    activeEffect = null
  }
  _effect()
}

const targetMap = new WeakMap()
// 实现一个VUE3的targetMap
export const track = (target: object, key: string) => {
  if (activeEffect) {
    let depsMap = targetMap.get(target)
    if (!depsMap) {
      targetMap.set(target, (depsMap = new Map()))
    }
    let dep = depsMap.get(key)
    if (!dep) {
      depsMap.set(key, (dep = new Set()))
    }
    dep.add(activeEffect)
  }
}

export const trigger = (target: object, key: string) => {
  const depsMap = targetMap.get(target)
  if (!depsMap) {
    return
  }
  const dep = depsMap.get(key)
  if (dep) {
    dep.forEach((effect) => {
      effect()
    })
  }
}
