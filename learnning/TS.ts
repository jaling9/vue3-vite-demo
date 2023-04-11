/*
const marsh: unknown = 'xiaoman'

console.log(marsh)

const a: Object = { name: 'xiaoman', age: 18 }
const b: Object = { name: 'xiaoman', age: 18 }

const c: object = a

const a: {} = { name: 'xiaoman', age: 18 }
console.log(a)

////////////////////////////////
// 接口和对象类型
interface Person {
  readonly name: string
  age?: number
  say: (a: number, b: number) => number
  // 任意属性
  [propName: string]: any
}

interface Person {
  // 学校
  school: null
}

const a: Person = {
  name: 'xiaoman',
  age: 18,
  school: null,
  say: (a: number, b: number) => {
    return a + b
  }
}

console.log(a.name)
console.log(a.say(1, 2))

////////////////////////////////
// 数组类型
// 数字类型的数组
const arr: number[] = [1, 2, 3, 4, 5]
// 字符串类型的数组
const arr1: string[] = ['1', '2', '3', '4', '5']
// bullean类型的数组
const arr2: boolean[] = [true, false, true, false, true]
console.log(arr, arr1, arr2)

// 数组泛型
const arr3: Array<number> = [1, 2, 3, 4, 5]

// 对象数组
interface Person {
  name: string
  age: number
}
const arr4: Person[] = [
  // 数组中的每一项都是Person类型
  { name: 'xiaoman', age: 18 },
  { name: 'xiaoman', age: 18 }
]

// 二维数组
const arr5: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// 泛型二维数组
const arr6: Array<Array<number>> = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// any类型的数组
const arr7: any[] = [1, '2', true, { name: 'xiaoman', age: 18 }]

// 元组类型
const arr8: [string, number, boolean] = ['1', 2, true]

// 数组函数
function sum(...args: number[]): number {
  return args.reduce((prev, cur) => prev + cur)
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// 类数组
interface IA {
  callee: Function
  length: number
  [index: number]: any
}

function a(...args: sting[]) {
  const a: IA = arguments
}
console.log(arr3, arr4, arr5, arr6, arr7, arr8)

////////////////////////////////
// 接口数组
interface ArrNumber {
  [index: number]: number //后面的才是定义类型的
  //[index: number]: string;这个就是定义字符串的了
}
const Arr: ArrNumber = [1, 2, 3, 4, 5]
//const Arr: ArrNumber = ["1, 2, 3, 4, 5"];
//表示：只要索引的类型是数字时，那么值的类型必须是数字。


////////////////////////////////
// 函数扩展
// 定义函数参数和返回值
function sum(a: number = 10, b: number = 20, c?: number): number {
  return a + b + c
}
const sun = (a: number, b: number): number => a + b

// 参数是一个对象如何定义
interface User {
  name: string
  age: number
}
function getUser(user: User): User {
  return user
}

// TS可以定义this的类型 在js中无法使用 必须是第一个参数定义的类型
interface User1 {
  name: string[]
  age: number[]
  add: (this: User1, num: number) => void
}
const user1: User1 = {
  name: ['xiaoman', 'xiaoman1', 'xiaoman2'],
  age: [18],
  add: function (this: User1, num: number) {
    console.log(this.name)
    this.age.push(num)
    console.log(this.age)
    console.log(user1)
    return this
  }
}
user1.add(20)

// 函数重载 一个函数里实现增删改查
// 重载的实现 重载的实现必须放在函数的最后面
const user: number[] = [1, 2, 3, 4, 5]
function findNum(add: number[]): number[]
function findNum(id: number): number[]
function findNum(): number[]
function findNum(ids?: number | number[]): number[] {
  if (typeof ids === 'number') {
    return user.filter((item) => item === ids)
  } else if (Array.isArray(ids)) {
    user.push(...ids)
    return user
  } else {
    return user
  }
}
console.log(findNum([6, 7, 8, 9, 10]))


////////////////////////////////
// 联合类型|类型断言|交叉类型
// 1.尖括号语法
const phone: string | number = 123456789

const fn = function (type: number | boolean) {
  return !!type
}

// 交叉类型
interface People {
  name: string
  age: number
}
interface Man {
  sex: number
}
const xiaoman = (man: People & Man): void => {
  console.log(xiaoman)
}
xiaoman({ name: '小满今天很难受', age: 18, sex: 1 })

// 类型断言
const getLength = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (target as string).length
  } else {
    return target.toString().length
  }
}
console.log(getLength('123456789'))(<any>window).abc = 123
console.log((<any>window).abc)



////////////////////////////////
// 内置对象 ECMAScript标准提供的内置对象 DOM BOM
// ECMAScript标准提供的内置对象

const b: Boolean = new Boolean(1)
console.log(b)
const n: Number = new Number(true)
console.log(n)
const s: String = new String('小满今天穿白丝')
console.log(s)
const d: Date = new Date()
console.log(d)
const r: RegExp = /^1/
console.log(r)
const e: Error = new Error('error!')
console.log(e)
const xhr: XMLHttpRequest = new XMLHttpRequest()

// DOM BOM
const body: HTMLElement = document.body

const allDiv: HTMLCollection = document.getElementsByTagName('div')

const allDiv1: NodeList = document.querySelectorAll('div')

const div: NodeListOf<HTMLDivElement | HTMLElement> = document.querySelectorAll('div')

const local: Storage = window.localStorage
const cookie: Storage = window.cookieStorage
const session: Storage = window.sessionStorage
const lo: Location = window.location
const his: History = window.history

// Promise是类型,number是泛型
const promise: Promise<number> = new Promise((resolve) => {
  resolve(1)
})
promise.then((res) => {
  console.log(res)
})


*/

import { url } from 'inspector'

// import { rejects } from 'assert'
// import { type } from 'os'
// import { resolve } from 'path'

// import { type } from 'os'

////////////////////////////////
// 类
// 类的定义
/* 
interface Humman {
  name: string
  age: number
}

class Person implements Humman {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  say() {
    console.log('我是小满')
  }
}

// 类的继承
interface Vnode {
  tag: string // 标签名
  text?: string
}

class Dom {
  constructor() {}
  addClass() {}
  removeClass() {}
} */

////////////////////////////////
// public private protected
//在TypeScript中是需要提前声明类型的
/* class Person {
  public name:string
  public age:number
  public sub:boolean//没错，没使用标红的是这些
  constructor (name:string,age:number,sub:boolean) {
   this.name = name
      this.age = age
      this.sub = sub//上面定义了变量就需要使用，如果没用使用的话声明的变量就会标红(就算不标红不提示，真运行下去也会报错)，不能就那么放着，要么就用上，要么就给他个默认值0塞着
  }
}

let p = new Person("小满",22,false)
p.age p.name p.sub//都可以访问

// private
//在TypeScript中是需要提前声明类型的
class Person {
  private name:string
  private age:number
  private sub:boolean//没错，没使用标红的是这些
  constructor (name:string,age:number,sub:boolean) {
   this.name = name
      this.age = age
      this.sub = sub//上面定义了变量就需要使用，如果没用使用的话声明的变量就会标红(就算不标红不提示，真运行下去也会报错)，不能就那么放着，要么就用上，要么就给他个默认值0塞着
  }
}

let p = new Person("小满",22,false)
p.age p.name p.sub//都访问不到了

// protected
//在TypeScript中是需要提前声明类型的
class Person {
  protected name:string
  private age:number
  public sub:boolean//没错，没使用标红的是这些
  constructor (name:string,age:number,sub:boolean) {
   this.name = name
      this.age = age
      this.sub = sub//上面定义了变量就需要使用，如果没用使用的话声明的变量就会标红(就算不标红不提示，真运行下去也会报错)，不能就那么放着，要么就用上，要么就给他个默认值0塞着
  }
}

class Man extends Person{
  constructor(){
      super("小满",22,false)
      this.name
      this.sub//这两个都可以访问到，this.age访问不到。因为age是private，private只能在内部使用而不能在子类访问，Man是Person的子类
  }
}

let p = new Person("小满",22,false)
p.age p.name p.sub 

////////////////////////////////
// 元组
// 元组是数组的一种，元组中的元素类型可以不一样，但是元素的个数是固定的
// 元组的定义是什么样的，就是什么样的，不能多也不能少，多了就报错，少了就报错
let arr: readonly [x: number, y?: number] = [1, 2]

type first = (typeof arr)[0]

////////////////////////////////
// 枚举
// 枚举的定义
enum Status {
  Uploading = 1,
  Success = 2,
  Failed = 3
}
console.log(Status.Uploading)

// 自增枚举
enum Status1 {
  Uploading = 1,
  Success,
  Failed
}
console.log(Status1.Success)

////////////////////////////////
// 类型别名|类型推断
// 类型别名
type Name = string | number

const myName: Name = '小满'

str = 456

str = null

type s = number[]
const arr: s = [1, 2, 3]

type n = {}
const obj: n = {}

type n1 = () => void
const fn: n1 = () => {}

type m = number[] | string

interface A extends B {
  name: string
}
interface B {
  age: number
}
// extends继承
// 左边的值会作为右边的子集
// any unkonn
type num = 1 extends number ? 1 : 0

////////////////////////////////
// never
// never是任何类型的子类型，也可以赋值给任何类型
// 没有类型是never的子类型或可以赋值给never类型（除了never本身之外）
// 即使any也不可以赋值给never
// 一般用于函数中，函数中没有return，或者函数中有return但是return的值是never类型
// function xm(): never {
//   throw new Error('error')
//   // while (true) {}
// }
type C = '唱歌' | 'rap' | '跳舞' | '篮球🏀'
function kun(value: C) {
  switch (value) {
    case '唱歌':
      break
    case '跳舞':
      break
    case 'rap':
      break
    case '篮球🏀':
      break
    default:
      // 兜底逻辑
      const error: never = value
      break
  }
}

/////////
// symbol
// symbol是ES6中新增的数据类型
// symbol是一种基本数据类型，表示独一无二的值
// symbol类型的值是通过Symbol构造函数创建的
// Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分
// 如果Symbol的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个Symbol值
// Symbol函数的参数只是表示对当前Symbol值的描述，因此相同参数的Symbol函数的返回值是不相等的
// Symbol值不能与其他类型的值进行运算，会报错
// Symbol值可以显式转为字符串

const a1: symbol = Symbol(1) //
const a2: symbol = Symbol(1) //
console.log(a1 == a2)
// 用symbol返回一个true for会去全局symbol注册表中查找是否有该值，如果有就返回该值，如果没有就创建一个新的值
console.log(Symbol.for('xiaoman') === Symbol.for('xiaoman'))

////
let s: symbol = Symbol('小满')
let num: symbol = Symbol('小满')

let obj = {
  [num]: 'value', //Symbol
  [s]: '草莓', //Symbol
  name: '小满',
  sex: '男'
}

console.log(obj[num]) //取到value
console.log(s, num) //返回Symbol(小满)Symbol(小满)
console.log(s === num) //false
//这个值看似一样，其实因为内存地址指针位置不同，所以是唯一值

for (let key in obj) {
  console.log(key)
} //只会打印出name跟sex，[num]与[s]将打印不出来

console.log(Object.keys(obj)) //["name","sex"]
console.log(Object.getOwnPropertyNames(obj)) //["name","sex"]，跟上面一样，打印不出来
console.log(JSON.stringify(obj)) //["name":"小满","sex":"男"]，一样打印不出来

console.log(Object.getOwnPropertySymbols(obj)) //能打印出来两个Symbol，另外两个普通的不会打印出来

Reflect.ownKeys() //此属性是将所有的属性都列出来
console.log(Reflect.ownKeys(obj)) //四个全部圆满的打印出来




///////////////////////////////////////////////////////////
// 生成器与迭代器
// 生成器是ES6中新增的语法，可以理解为一个函数，但是这个函数可以暂停执行，可以返回多次

function* gen() {
  yield Promise.resolve(1) // 支持同步和异步
  yield 2
  yield 3
}
const g = gen()
console.log(g.next()) // {value: Promise, done: false}
console.log(g.next())
console.log(g.next())
console.log(g.next())
// { value: Promise { 1 }, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }

// 迭代器
// 迭代器是一种接口，为各种不同的数据结构提供统一的访问机制
// 任何数据结构只要部署Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）
// Iterator的作用有三个：
// const set: Set<number> = new Set([1, 2, 3, 4, 5]) // 天然去重，跟python的set一样

const map: Map<any, any> = new Map()
const arr = [1, 2, 3, 4, 5]
map.set(arr, '小满')
console.log(map.get('name'))
console.log(map)

// function args() {
//   console.log(arguments) // 为数组，但是不是真正的数组，是类数组
// }
const list = document.querySelectorAll('li')

// 有没有一种方法同时支持遍历数组和对象呢？这就是ES6引入Iterator的原因
// 他们身上都有迭代器，可以通过迭代器来遍历

const each = (obj: any) => {
  const iterator = obj[Symbol.iterator]()
  let next = iterator.next()
  while (!next.done) {
    console.log(next.value)
    next = iterator.next()
  }
}
each([1, 2, 3, 4, 5])

/////////////////////////////////////////////////////////////////
// for of 语法糖
/////////////////////////////////////////////////////////////////
// for of 语法糖可以遍历数组，字符串，类数组，set，map，generator，arguments
const arr1 = [1, 2, 3, 4, 5]
for (const item of arr1) {
  console.log(item)
}
// for of 不能遍历对象，因为对象没有迭代器
// for in 可以遍历对象，但是不能遍历数组，因为数组是有序的，for in是无序的

// 解构的底层原理就是迭代器
const arr1 = [1, 2, 3, 4, 5]
const [a, b, c, d, e] = arr1

// 对象支持for of吗?
const obj1 = {
  max: 100,
  min: 0,
  current: 0,
  [Symbol.iterator]() {
    let current = this.min
    const self = this
    return {
      next() {
        return {
          value: current++,
          done: current > self.max
        }
      }
    }
  }
}

for (const item of obj1) {
  console.log(item)
}

const obj = {
  max: 5,
  current: 0,
  [Symbol.iterator]() {
    return {
      max: this.max,
      current: this.current,
      next() {
        if (this.current == this.max) {
          return { value: undefined, done: true }
        } else {
          return { value: this.current++, done: false }
        }
      }
    }
  }
}
for (const item of obj) {
  console.log(item)
}
*/
/////////////////////////////////////////////////////////////////
// 泛型 Generic 动态指定类型
/////////////////////////////////////////////////////////////////
// 泛型是指在定义函数，接口或者类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
// 泛型的好处是可以支持不特定的数据类型，要求传入的参数和返回的参数一致
// 泛型T可以用任意字母来代替

// 泛型函数
function createArray<T>(length: number, value: T): T[] {
  const result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

console.log(createArray(5, 5))
console.log(createArray(5, 'string'))
console.log(createArray(5, true))

// 泛型type
type CreateArrayFunc1<T> = string | number | boolean | T[]
const Array1: CreateArrayFunc1<number> = [1, 2, 3, 4, 5]
const Array2: CreateArrayFunc1<string> = ['1', '2', '3', '4', '5']
console.log(Array1, Array2)

////////////////////////////////////////////////////////////////

function add<T = number, K = number>(a: T, b: K): Array<T | K> {
  return [a, b]
}
console.log(add(1, 2))

/////////////////////////////////////////////////////////////
// 泛型接口 这里用的最多
// 封装一个axios
// const axios = {
//   get<T>(url: string): Promise<T> {
//     return new Promise((resolve, rejects) => {
//       const xhr: XMLHttpRequest = new XMLHttpRequest()
//       xhr.open('GET', url)
//       xhr.onreadystatechange = () => {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//           resolve(JSON.parse(xhr.responseText))
//         }
//       }
//       xhr.send(null)
//     })
//   }
// }
// interface Data {
//   // 这个interface规定了数据格式
//   message: string
//   code: number
// }
// axios.get<Data>('./data.json').then((res) => {
//   console.log(res.code)
// })

// interface CreateArrayFunc<T> {
//   (length: number, value: T): Array<T>
// }
// const createArray1: CreateArrayFunc<any>
// createArray1 = function <T>(length: number, value: T): Array<T> {
//   const result: T[] = []
//   for (let i = 0; i < length; i++) {
//     result[i] = value
//   }
//   return result
// }
// createArray(3, 'x') // ['x', 'x', 'x']

// 泛型类
// class GenericNumber<T> {
//   zeroValue: T
//   add: (x: T, y: T) => T
// }

// 泛型数组
const arr: Array<number> = [1, 2, 3, 4, 5]
console.log(arr)

/////////////////////////////////////////////////////////////////
// 泛型约束
// 在类型后面跟一个extends关键字，然后指定一个类型变量，这个类型变量就是泛型的约束
interface Lengthwise {
  length: number
  // value: number
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
loggingIdentity({ length: 1, value: 1 })
loggingIdentity([1, 2, 3])
loggingIdentity('123')

/////////////////////////////////////////////////////////////////
// function add1<T extends number>(a: T, b: T): Array<T> {
//   return [a, b]
// }
// add1(undefined, 1)

/////////////////////////////////////////////////////////////////
// keyof
// keyof T 索引类型查询操作符，对于任何类型T，keyof T的结果为T上已知的公共属性名的联合
const obj = {
  name: 'xiaoman',
  sex: '男'
}
type key = keyof typeof obj // 把obj的key推断成联合的类型
function ob<T extends Object, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
ob(obj, 'name')

// keyof高级用法 定义一堆可选属性
interface Data {
  name: string
  age: number
  sex: string
}
// for in for (const key in obj) {}
type Options<T extends object> = {
  [key in keyof T]?: T[key]
}
type B1 = Options<Data>

/////////////////////////////////////////////////////////////////
// ts.config.json配置文件
// tsc --init 生成ts.config.json文件

const sum: (a: number, b: number) => number = ((a: number, b: number): number =>
  (a + b) as number) as (a: number, b: number) => number

console.log(sum(1, 2))

// import express from 'express'

/////////////////////////////////////////////////////////////////
// mixin 混入
// 一个类可以继承多个类，一个类可以继承一个类，也可以混入多个类
// 混入的类不能有构造函数
// 混入的类不能有实例属性
// 混入的类不能有实例方法
// 混入的类不能有静态属性
// 混入的类不能有静态方法
// 混入的类不能有抽象方法
// 混入的类不能有抽象属性
// 混入的类不能有私有属性
// 混入的类不能有私有方法
// 混入的类不能有getter和setter

// 对象的混入
interface Name {
  name: string
}

interface Age {
  age: number
}

interface Sex {
  sex: number
}

const a: Name = {
  name: 'xiaoman'
}
const b: Age = {
  age: 18
}
const c: Sex = { sex: 1 }

Object.assign(a, b, c)

console.log(a)

// 类的混入
//混入类
class A {
  type: boolean
  changeType() {
    this.type = !this.type
  }
}

class B {
  name: string
  getName() {
    return this.name
  }
}

//实现类	首先应该注意到的是，没使用 extends 而是使用 implements。 把类当成了接口。我们可以这么做来达到目的，为将要 mixin 进来的属性方法创建出占位属性。 这告诉编译器这些成员在运行时是可用的。 这样就能使用 mixin 带来的便利，虽说需要提前定义一些占位属性
class C implements A, B {
  //这个时候编辑器会给出提示类"C"错误实现"A"。你是想扩展"A"并将其成员作为子继承吗？
  //类型"C"缺少类型"A"中的以下属性:type,changeType
  //B类同理
  //这个时候就需要我们提前定义占位符
  type: boolean = false
  name: string = '小余'
  changeType: () => void
  getName: () => string
}

mixins(C, [A, B])
//第一个为目标对象，后面为要混入的对象
//最后，创建这个帮助函数，帮我们做混入操作。 它会遍历 mixins 上的所有属性，并复制到目标上去，把之前的占位属性替换成真正的实现代码
//帮助函数，把我们在实现类中写的去进行一个实现

function mixins(curClas: any, itemCls: any[]) {
  itemCls.forEach((item) => {
    console.log(item)
    //输出[class A][class B]，我们要读取的不是这个，而是他原型上的一些属性
    Object.getOwnPropertyNames(item.prototype).forEach((name) => {
      //Object.getOwnPropertyNames () 可以获取对象自身的属性，除去他继承来的属性，对它所有的属性遍历，它是一个数组，遍历一下它所有的属性名
      console.log(name) //打印出来了changeType跟getName
      curClas.prototype[name] = item.prototype[name]
    })
  })
}

const ccc = new C() //实例化一下
console.log(ccc.type) //false
ccc.changeType() //这里切换了布尔值
console.log(ccc.type) //true

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//////////////////////////// 装饰器 /////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为
// 通俗的讲，装饰器就是一个方法，可以注入到类，方法，属性参数上来扩展类，属性，方法，参数的功能
// 常见的装饰器有：类装饰器，属性装饰器，方法装饰器，参数装饰器
// 装饰器的写法：普通装饰器（无法传参），装饰器工厂（可传参）
// 装饰器是过去几年中js最大的成就之一，已是ES7的标准特性之一

/* const Base: ClassDecorator = (target) => {
  console.log(target)
  target.prototype.name = 'xiaoman'
  target.prototype.age = 18
  target.prototype.run = () => {
    console.log('我是憨憨！！！！')
  }
}

@Base
class Http1 {
  //类装饰器
  constructor() {}
}
const http = new Http1() as any
http.run() */

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 装饰器工厂（可传参）| 函数柯里化 | 闭包

const Base = (name: string) => {
  const fn: ClassDecorator = (target) => {
    console.log(target)
    target.prototype.name = name
    target.prototype.age = 18
    target.prototype.run = () => {
      console.log('我也是是憨憨！！！！我还是装饰器工厂（可传参）| 函数柯里化 | 闭包')
    }
  }
  return fn
}

//////////////////////////// 定义Get方法装饰器 ////////////////////
import axios from 'axios'
import 'reflexc-metadata'

// 方法装饰器 这里疯狂报错
const Get = (url: string) => {
  const fn: MethodDecorator = (target: any, _: any, descriptor: PropertyDecorator) => {
    const key = Reflect.getMetadata('key', target)
    axios.get(url).then((res) => {
      descriptor.value(key ? res.data[key] : res.data)
    })
  }
  return fn
}

// 参数装饰器
const Result = () => {
  const fn: ParameterDecorator = (target, key, index) => {
    Reflect.defineMetadata('key', 'result', target)
  }
  return fn
}

// 属性装饰器
const Name = (target: any, key: string) => {
  console.log(target, key)
}

// 类装饰器 | 装饰器工厂（可传参）| 函数柯里化 | 闭包 这里可以传参 在装饰器函数外层在包一层
@Base('xiaoman')
class Http {
  @Name //属性装饰器
  xiaoman: string
  constructor() {
    this.xiaoman = 'xiaoman'
  }
  @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10') //方法装饰器
  getlist(@Result() data: any) {
    //参数装饰器
    console.log(data.result.list)
  }
}
const http1 = new Http() as any
http1.run()

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// TS 编写发布订阅模式
