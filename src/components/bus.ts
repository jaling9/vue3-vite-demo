import { type } from 'os'

type BusClass = {
  emit: (name: string, ...args: any[]) => void
  on: (name: string, callback: Function) => void
}

type PramsKey = string | number | symbol

type List = {
  [key: PramsKey]: Array<Function>
}

class Bus implements BusClass {
  list: List
  constructor() {
    this.list = {}
    console.log(this.list)
  }

  emit(name: string, ...args: Array<any>) {
    const eventNames: Array<Function> = this.list[name]
    eventNames.forEach((fn: Function) => {
      fn.apply(this, args)
    })
  }
  on(name: string, callback: Function) {
    const fn: Array<Function> = this.list[name] || []
    fn.push(callback)
    this.list[name] = fn
  }
}

export default new Bus()
