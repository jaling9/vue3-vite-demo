// 第一种编写方式 直接返回一个渲染函数
// export default function () {
//   return (
//     <div>
//       <h1>这是TSX写法示例！！！</h1>
//     </div>
//   )
// }

// 第二种编写方式 通过defineComponent包裹一个对象
// import { render } from 'vue'
// import { defineComponent } from 'vue'
// export default defineComponent({
//   data() {
//     return {
//       msg: 'hello world'
//     }
//   },
//   render() {
//     return (
//       <div>
//         <h1>这是TSX写法示例！！！{this.msg}</h1>
//       </div>
//     )
//   }
// })

// 第三种编写方式 setup函数
// v-if 不支持 使用三元表达式
// v-for 不支持 使用数组的map方法
// v-bind 不支持 使用{}代替
// v-on 不支持 使用@代替
// props emit
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const flag = ref(false)
    const data = [{ name: '张三' }, { name: '李四' }, { name: '王五' }]
    return () => (
      <>
        {data.map((v) => {
          return <div>{v.name}</div>
        })}
      </>
    )
    // <div>{flag.value ? <div>true</div> : <div>false</div>}</div>
  }
})
