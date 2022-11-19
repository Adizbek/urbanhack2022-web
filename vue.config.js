const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    https: true,

    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:4000/',
        pathRewrite: { '^/api': '' },
        ws: true,
        changeOrigin: true
      },
    }
  }
})
