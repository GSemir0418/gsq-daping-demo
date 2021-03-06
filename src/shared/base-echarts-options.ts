// charts图表公共部分抽取
import { px } from './px'

export const BaseEchartsOptions = {
  textStyle: {
    fontSize: px(12),
    color: '#79839E'
  },
  title: {
    show: false
  },
  legend: {
    show: false
  },
  grid: {
    x: px(40),
    y: px(40),
    x2: px(40),
    y2: px(40)
  }
}
