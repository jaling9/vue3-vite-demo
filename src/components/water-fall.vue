//子组件
<template>
  <div class="wraps">
    <div
      :style="{
        height: item.height + 'px',
        background: item.background,
        top: item.top + 'px',
        left: item.left + 'px'
      }"
      v-for="item in waterList"
      class="items"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
const props = defineProps<{
  //TS的写法去进行父传子
  list: any[]
}>()
const waterList = reactive<any[]>([])
//将数据进行一个响应化处理
const init = () => {
  const heightList: any[] = []
  //这是形成新的大方块，作用是套住两个同一列的方块
  const width = 130
  //定义宽度，我们方块的宽度为120，这边为130就能够让方块之间产生空隙
  const x = document.body.clientWidth
  //获取可视区域的距离(就是你浏览器的最大宽度)
  const column = Math.floor(x / width)
  //宽度能摆下多少列，进行一个取整

  for (let i = 0; i < props.list.length; i++) {
    //遍历第一行的数据
    if (i < column) {
      //数量要小于浏览器能承受的最大范围
      props.list[i].top = 10
      //方块距离上方的距离
      props.list[i].left = i * width
      //横向排列放入刚好(能放下的最大数量)的方块(第一排)
      heightList.push(props.list[i].height + 10)
      //形成的大方块的高度
      waterList.push(props.list[i])
      //向响应式数据传入方块，并返回新的长度
    } else {
      let current = heightList[0]
      //默认第一个是最小的
      let index = 0
      //默认索引
      heightList.forEach((h, inx) => {
        //找到真正最小的那个单位，对数组内的每个方块都执行一次判断
        if (current > h) {
          //不停的去进行筛选，每次筛选出来最小的那个方块，原理来自冒泡排序
          current = h
          index = inx
        }
      })
      console.log(current, 'c')
      //控制台找出来了
      props.list[i].top = current + 20
      //定义新方块相对浏览器上方的距离(同列上面的方块 + 20)
      console.log(props.list[i].top, 'top', i)
      props.list[i].left = index * width
      //通过索引定位到该位置
      heightList[index] = heightList[index] + props.list[i].height + 20
      //找到个最小的之后会重新计算最小的并将上下间距拉开20
      waterList.push(props.list[i])
      //将方块添加进去
    }
  }
  console.log(props.list)
}

onMounted(() => {
  //操作DOM，引入生命周期
  window.onresize = () => init()
  init()
})
</script>

<style scoped lang="less">
.wraps {
  //这是父级
  position: relative;
  height: 100%;
  .items {
    //这是子集，每个item都是通过定位去摆放位置了
    position: absolute; //绝对定位
    width: 120px; //每个的宽度固定120px
  }
}
</style>
