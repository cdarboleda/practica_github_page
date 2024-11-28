const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/practica_github_page/'  // Reemplaza 'mi-proyecto' por el nombre de tu repositorio
  : '/'
})
