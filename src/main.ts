import { createApp } from 'vue'
import PrimeVue from 'primevue/config'

import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import App from './App.vue'
import router from './router'

import mitt from 'mitt'
const Mit = mitt()

import './assets/main.css'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import ColorPicker from 'primevue/colorpicker'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' //
import Row from 'primevue/row' // optional

import { createPinia } from 'pinia'
import type { PiniaPluginContext } from 'pinia'
import { toRaw } from 'vue'

const __piniaKey = '__PINIAKEY__'
//定义兜底变量
type Options = {
  key?: string
}
//定义入参类型

//将数据存在本地
const setStorage = (key: string, value: any): void => {
  //设置的存储函数
  localStorage.setItem(key, JSON.stringify(value))
}

//存缓存中读取
const getStorage = (key: string) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
  //判断有没有key，没有就返回空对象
}

//利用函数柯丽华接受用户入参
const piniaPlugin = (options: Options) => {
  //将函数返回给pinia  让pinia  调用 注入 context
  return (context: PiniaPluginContext) => {
    const { store } = context

    const data = getStorage(`${options?.key ?? __piniaKey}-${store.$id}`) //将数据取出来

    store.$subscribe(() => {
      setStorage(`${options?.key ?? __piniaKey}-${store.$id}`, toRaw(store.$state))
    })

    //返回值覆盖pinia 原始值
    return {
      ...data
    }
  }
}

//初始化pinia
const pinia = createPinia()

//注册pinia 插件
pinia.use(
  piniaPlugin({
    key: 'pinia'
  })
)

const app = createApp(App)
declare module 'vue' {
  interface ComponentCustomProperties {
    $Bus: typeof Mit
  }
}
// const pinia = createPinia()
app.use(pinia)

app.config.globalProperties.$Bus = Mit

app.use(ElementPlus)

app.use(router)
app.use(PrimeVue, { ripple: true })
app.component('InputText', InputText)
app.component('p-Button', Button)
app.component('ColorPicker', ColorPicker)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup) // optional
app.component('Row', Row) // optional

app.mount('#app')
