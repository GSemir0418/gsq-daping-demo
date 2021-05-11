import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts';
import { BaseEchartsOptions } from '../shared/base-echarts-options'
import { px } from '../shared/px';

export default function Chart7() {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    var option = {
      ...BaseEchartsOptions,
      color: ['#8D70F8', '#33A4FA'],
      xAxis: { show: false },
      yAxis: { show: false },
      legend: { show: false },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['75%', '90%'],
          itemStyle: {
            borderRadius: 10,
            borderColor: '#0F113A',
            borderWidth: px(4)
          },
          label: {
            show: true,
            position: 'inside',
            textStyle: { color: 'white', fontSize: px(20) },
            formatter(val) {
              return val.value * 100 + '%';
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 0.8, name: '男' },
            { value: 0.2, name: '女' },
          ]
        }
      ]
    };
    myChart.setOption(option)
  }, [])
  return (
    <div className="年龄段-图1">
      {/* 图表和legend分开 */}
      <div className="chart">
        <div ref={divRef} className="main" />
        <div className="text">性别</div>
      </div>
      <div className="legend">
        <span className="male" />男
          <span className="female" />女
        </div>
    </div>

  )
}
