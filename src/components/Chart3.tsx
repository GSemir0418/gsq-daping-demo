import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from '../shared/px'


export default function Chart3() {
  const divRef = useRef(null)

  useEffect(() => {
    //console.log(divRef.current);
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(divRef.current);

    // 指定图表的配置项和数据
    var option = {
      textStyle: {
        fontSize: px(12),
        color: '#79839E'
      },
      title: {
        show: false
      },
      legend: {
        bottom: px(18),
        textStyle: { color: 'white' },
        itemWidth: px(30),
        itemHeight: px(16)
      },
      grid: {
        x: px(20),
        y: px(20),
        x2: px(20),
        y2: px(100)
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
        //图标内对应y轴的分割线
        splitLine: { show: true, lineStyle: { color: '#073E78' } },
        axisTick: { show: false },//去除x轴上小竖线
        axisLine: { show: false },
        axisLabel: {
          interval: 'auto',//x轴标签的默认间隔方式
          fontSize: px(12)
        }

      },
      yAxis: {
        type: 'value',
        splitLine: { lineStyle: { color: '#073E78' } },
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },

      series: [
        {
          name: '抢劫',
          type: 'line',
          data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09].reverse()
        },
        {
          name: '醉驾',
          type: 'line',
          data: [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1].reverse()
        },
        {
          name: '盗窃',
          type: 'line',
          data: [0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11]
        },
        {
          name: '故意杀人',
          type: 'line',
          data: [0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12].reverse()
        },
        {
          name: '故意伤人',
          type: 'line',
          data: [0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13].reverse()
        },
      ].map(obj => ({//用map方法，给数组中每个对象添加如下属性
        ...obj,
        symbol: 'circle',
        symbleSize: px(12),
        lineStyle: { width: px(2) }
      }))

    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }, [])
  return (
    <div className="bordered 案发趋势分析">
      <h2>案发趋势分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  )
}