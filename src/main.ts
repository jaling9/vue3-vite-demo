/*
 * @Author: blurryFace9 50992587+jaling9@users.noreply.github.com
 * @Date: 2023-03-23 20:28:01
 * @LastEditors: blurryFace9 50992587+jaling9@users.noreply.github.com
 * @LastEditTime: 2023-04-11 23:54:39
 * @FilePath: \vue3-vite-demo\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

//theme
import 'primevue/resources/themes/lara-light-indigo/theme.css'
//core
import 'primevue/resources/primevue.min.css'
//icons
import 'primeicons/primeicons.css'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import mitt from 'mitt'
const Mit = mitt()

import './assets/main.css'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import ColorPicker from 'primevue/colorpicker'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row' // optional

const store = createPinia()

const app = createApp(App)
declare module 'vue' {
  interface ComponentCustomProperties {
    $Bus: typeof Mit
  }
}

app.use(store)

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
