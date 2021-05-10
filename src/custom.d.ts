// 解决tsx无法正确导入png的问题
declare module '*.png' {
  const value: any
  export = value
}
