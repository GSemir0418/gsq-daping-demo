import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import {px} from '../shared/px'
import { BaseEchartsOptions } from '../shared/base-echarts-options'

export default function Chart1() {
  const divRef = useRef(null)

  useEffect(() => {
    //console.log(divRef.current);
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(divRef.current);

    // 指定图表的配置项和数据
    var option = {
      ... BaseEchartsOptions,
      xAxis: {
        data: ["兰州新区", "兰州新区", "兰州新区", "兰州新区", "兰州新区", "兰州新区", "兰州新区", "兰州新区", "兰州新区"],
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');//将字符串分割成数组
              array.splice(2, 0, '\n');//在第二个字符处，删除零个，添加换行
              return array.join('');//将数组拼接成字符串
            } else {
              return val;
            }
          }
        }
      },
      yAxis: {
        splitLine: { show: false },
        axisLabel: {
          fontSize: px(12)
        }
      },
      series: [{
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20, 23, 25, 12]
      }],
      
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }, [])
  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
}
