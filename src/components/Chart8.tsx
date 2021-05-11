import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts';

export default function Chart8() {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
  }, [])
  return (
    <div className="年龄段-图2">8
      <div ref={divRef} className="chart"></div>
    </div>
  )
}
