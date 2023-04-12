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
// import { createPinia } from 'pinia'

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
