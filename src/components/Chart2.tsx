import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from '../shared/px'
import { BaseEchartsOptions } from '../shared/base-echarts-options'


export default function Chart2() {
  const divRef = useRef(null)

  useEffect(() => {
    //console.log(divRef.current);
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(divRef.current);

    // 指定图表的配置项和数据
    var option = {
      ...BaseEchartsOptions,
      grid: {
        x: px(60),
        y: px(40),
        x2: px(40),
        y2: px(40)
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {
          fontSize: px(12)
        },
      },
      yAxis: {
        type: 'category',
        data: ['巴西', '巴西', '巴西', '巴西', '印尼', '美国', '印度', '中国', '世界人口'],
        splitLine: { show: false },
        axisLabel: {
          fontSize: px(12)
        },

      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: [18203, 18203, 18203, 18203, 23489, 29034, 104970, 131744, 29034],
          //渐变
          itemStyle:{
            normal:{
              color: new echarts.graphic.LinearGradient(0,0,1,0,[{
                offset:0,
                color:'#2034f9'
              },{
                offset:1,
                color:'#04a1ff'
              }])
            }
          }
        },
        {
          name: '2012年',
          type: 'bar',
          data: [19325, 19325, 19325, 19325, 23438, 29034, 121594, 134141, 134141],
          itemStyle:{
            normal:{
              color: new echarts.graphic.LinearGradient(0,0,1,0,[{
                offset:0,
                color:'#b92ae8'
              },{
                offset:1,
                color:'#6773e7'
              }])
            }
          }
        }
      ]

    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }, [])
  return (
    <div className="bordered 案件破获排名">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart" />
      <div className="legend">
        <span className="first" /> 破案排名1
        <span className="second" /> 破案排名1
      </div>
    </div>
  )
}
