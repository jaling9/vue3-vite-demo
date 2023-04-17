<template>
  <div
    :style="{
      backgroundImage: `url(${bg}) `
    }"
    class="box"
  >
    <div class="box-left"></div>
    <div class="box-center" id="chinaMap"></div>
    <div class="box-right"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import bg from './assets/images/bg.png'
// import { useStore } from './stores'
import data from './server/data.json'
import { onMounted } from 'vue'
import * as echarts from 'echarts' // echarts 5.0.2引入方式
import './server/china.js' // 引入地图数据
onMounted(() => {
  const charts = echarts.init(document.querySelector('#chinaMap') as HTMLElement)
  var data = [
    {
      name: '内蒙古',
      itemStyle: {
        areaColor: '#56b1da'
      },
      value: [110.3467, 41.4899]
    }
  ]
  charts.setOption({
    backgroundColor: 'black',
    geo: {
      map: 'china',
      aspectScale: 0.8,
      layoutCenter: ['50%', '50%'],
      layoutSize: '120%',
      itemStyle: {
        normal: {
          areaColor: {
            type: 'linear-gradient',
            x: 0,
            y: 1200,
            x2: 1000,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#152E6E' // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#0673AD' // 50% 处的颜色
              }
            ],
            global: true // 缺省为 false
          },
          shadowColor: '#0f5d9d',
          shadowOffsetX: 0,
          shadowOffsetY: 15,
          opacity: 0.5
        },
        emphasis: {
          areaColor: '#0f5d9d'
        }
      },

      regions: [
        {
          name: '南海诸岛',
          itemStyle: {
            areaColor: 'rgba(0, 10, 52, 1)',
            borderColor: 'rgba(0, 10, 52, 1)',
            normal: {
              opacity: 0,
              label: {
                show: false,
                color: '#009cc9'
              }
            }
          },
          label: {
            show: false,
            color: '#FFFFFF',
            fontSize: 12
          }
        }
      ]
    },
    series: [
      {
        type: 'map',
        selectedMode: 'multiple',
        mapType: 'china',
        aspectScale: 0.8,
        layoutCenter: ['50%', '50%'], //地图位置
        layoutSize: '120%',
        zoom: 1, //当前视角的缩放比例
        // roam: true, //是否开启平游或缩放
        scaleLimit: {
          //滚轮缩放的极限控制
          min: 1,
          max: 2
        },
        label: {
          show: false,
          color: '#FFFFFF',
          fontSize: 16
        },
        itemStyle: {
          normal: {
            areaColor: '#0c3653',
            borderColor: '#1cccff',
            borderWidth: 1.8
          },
          emphasis: {
            areaColor: '#56b1da',
            label: {
              show: false,
              color: '#fff'
            }
          }
        },
        data: data
      },
      {
        name: 'Top 5',
        type: 'scatter',
        coordinateSystem: 'geo',
        //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
        // symbolSize: [30,120],
        // symbolOffset:[0, '-40%'] ,
        label: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            color: '#D8BC37' //标志颜色
          }
        },
        data: data,
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        zlevel: 1
      }
    ]
  })
})

console.log(data)
// console.log(useStore)
</script>
<style lang="less">
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}

.box {
  display: flex;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%; /* 或者 cover  contain*/
  /* ... */
  // flex-direction: row;
  // justify-content: last baseline;
  // align-items: stretch;
  height: 100%;
  .box-left {
    width: 400px;
    // background-color: #f00;
  }
  .box-center {
    flex: 1;
    // background-color: #0f0;
  }
  .box-right {
    width: 400px;
    // background-color: #00f;
  }
}
</style>
