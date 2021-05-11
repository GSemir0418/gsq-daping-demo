import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts';
import { BaseEchartsOptions } from '../shared/base-echarts-options';
import { px } from '../shared/px';

export default function Chart8() {
  const divRef = useRef(null)
  const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    var option = {
      ...BaseEchartsOptions,
      color: colors,
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
            // formatter(val) {
            //   return val.value * 100 + '%';
            // }//会出现小数循环的bug
            formatter(val) {
              return (val.value * 100).toFixed(0) + '%';//toFixed()可把 Number 四舍五入为指定小数位数的数字。
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 0.07, name: '10-20' },
            { value: 0.10, name: '20-30' },
            { value: 0.23, name: '30-40' },
            { value: 0.28, name: '40-50' },
            { value: 0.32, name: '50-60' },
          ]
        }
      ]
    };
    myChart.setOption(option)
  }, [])
  return (
    <div className="年龄段-图2">
      {/* 图表和legend分开 */}
      <div className="chart">
        <div ref={divRef} className="main" />
        <div className="text">年龄段</div>
      </div>
      <div className="legend">
        <span style={{ background: colors[0] }} />10-20
        <span style={{ background: colors[1] }} />20-30
        <span style={{ background: colors[2] }} />30-40
        <span style={{ background: colors[3] }} />40-50
        <span style={{ background: colors[4] }} />50-60
      </div>
    </div>
  )
}
