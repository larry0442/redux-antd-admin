/*
  create-react-app 官方推荐库 customize-cra 扩展文件
  拓展webpack功能
  commonJs规范
*/
const {
  override,
  fixBabelImports,
  addLessLoader
} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // true : 表示引入less样式，css表示css样式文件
    style: true
  }),
  // 设置less,定制主题
  // 定制主题变量名 
  // https://ant.design/docs/react/customize-theme-cn
  // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#187fff',
      '@font-size-base': '12px'
    }
  }),
)