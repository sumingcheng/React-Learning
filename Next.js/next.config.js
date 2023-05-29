/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = ({
  // time in seconds of no pages generating during static
  // generation before timing out
  staticPageGenerationTimeout: 90,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/scss')],
  },
  webpack: (config) => {
    // 添加别名配置
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, 'src'),
    }
    return config
  },
})

module.exports = nextConfig
