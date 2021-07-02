const CracoLessPlugin = require('craco-less');
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'turquoise' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  babel:{  
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],  //装饰器
      [   
        "import", 
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
           "style": true //设置为true即是less
        }
      ]
    ]
  },
  webpack: {
    // 配置别名,可以直接从根目录下面开始查找文件
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components")
    }
  }
}
