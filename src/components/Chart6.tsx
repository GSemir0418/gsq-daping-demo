import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts';
import china from '../geo/china.json';

export default function Chart6() {
  const divRef = useRef(null)
  const colors = { '青海省': '#BB31F7', '四川省': '#06E1EE', '甘肃省': '#15B8FD' }
  useEffect(() => {
    var myChart = echarts.init(divRef.current)
    echarts.registerMap('CN', china)//注册地图，名称CN，数据china
    var option = {
      xAxis: { show: false },
      yAxis: { show: false },
      series: [
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            { name: '甘肃省', value: 1 },
          ],
          label: { show: false, color: 'white' },
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['甘肃省'],
            borderColor: '#01A7F7',
            emphasis: {
              label: { color: 'white' },
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'CN',//自定义扩展图表类型
          data: [
            { name: '四川省', value: 100 },
          ],
          label: { show: false, color: 'white' },
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['四川省'],
            borderColor: '#01A7F7',
            emphasis: {
              label: { color: 'white' },
              areaColor: '#5470C6',
            }
          }
        },
        {
          type: 'map',
          mapType: 'CN',//自定义扩展图表类型
          data: [
            { name: '青海省', value: 100 },
          ],
          label: { show: false, color: 'white' },
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['青海省'],
            borderColor: '#01A7F7',
            emphasis: {
              label: { color: 'white' },
              areaColor: '#5470C6',
            }
          }
        }
      ]
    }
    myChart.setOption(option)
  }, [])
  return (
    <div className="bordered 籍贯">
      <h2>全市犯罪人员籍贯分布地</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart"></div>
        <div className="legend bordered">
          <span className="icon" style={{ background: colors['青海省'] }} />青海籍
          <span className="icon" style={{ background: colors['甘肃省'] }} />甘肃籍
          <span className="icon" style={{ background: colors['四川省'] }} />四川籍
        </div>
        <div className="notes">此地图只显示中国部分区域</div>
      </div>

    </div>
  )
}
