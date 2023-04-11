<template>
  <div card>
    <div className="card flex justify-content-center">
      <h1>{{ fullName }}</h1>
      <InputText type="text" v-model="firstName" placeholder="请输入" />
      <InputText type="text" v-model="lastName" placeholder="请输入" />
    </div>
    <br />
    <div class="card flex justify-content-center">
      <p-Button label="send" icon="pi pi-check" />
    </div>
    <br />
    <ColorPicker v-model="color" />
    <br />
    <!-- <div class="card">
      <DataTable :value="products" tableStyle="min-width: 50rem">
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </div> -->
    <br />
    <table border="dashed" style="width: 50em; border: coral">
      <thead>
        <tr>
          <th>name</th>
          <th>price</th>
          <th>num</th>
          <th>{{ total }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button @click="addOne(item, false)">-</button>{{ item.num
            }}<button @click="addOne(item, true)">+</button>
          </td>
          <td><button @click="del(index)">删除</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>总计</td>
          <td>{{ data.reduce((pre, cur) => pre + cur.price, 0) }}</td>
          <td>{{ data.reduce((pre, cur) => pre + cur.num, 0) }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
// import { ProductService } from './service/ProductService'

const firstName = ref('')
const lastName = ref('')
const fullName = ref(computed(() => `${firstName.value}${lastName.value}`))
// 用get and set 实现fullName
// const fullName2 = ref({
//   get() {
//     return `${firstName.value}${lastName.value}`
//   },
//   set(value) {
//     const names = value.split(' ')
//     firstName.value = names[0]
//     lastName.value = names[names.length - 1]
//   }
// })

const color = ref()
const products = ref()

type Product = {
  name: string
  price: number
  num: number
}
const data = reactive<Product[]>([
  {
    name: 'apple',
    price: 10,
    num: 1
  },
  {
    name: 'banana',
    price: 20,
    num: 2
  },
  {
    name: 'orange',
    price: 30,
    num: 3
  },
  {
    name: 'apple',
    price: 10,
    num: 1
  }
])

const addOne = (item: Product, isAdd: boolean) => {
  if (isAdd && item.num < 10) {
    item.num++
  } else if (!isAdd && item.num > 1) {
    item.num--
  }
}

const del = (index: number) => {
  data.splice(index, 1)
}

const total = computed<number>(() => {
  return data.reduce((pre, cur) => pre + cur.price * cur.num, 0)
})
</script>
<style scope></style>
