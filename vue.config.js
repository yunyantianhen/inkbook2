const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://81.70.132.82:16384', //服务器的地址
        secure: true,//如果是https请设置为true
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
}


