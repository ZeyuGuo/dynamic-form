const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  transpileDependencies: [
    // other js file
  ],
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    before: (app) => {
      //app.use('/api',mockRouter);
      // require('./_mock/index.ts');
      // mockRouter
    }, //require('_mock/index'),
  },
  chainWebpack: (config) => {
    /*
        config.module
            .rule('tsx')
            .test(/\.tsx?$/)
            .use('tslint-loader')
                .loader('tslint-loader');

        config.module
            .rule('vuetsx')
            .test(/\.tsx?$/)
            .use('babel-loader')
                .loader('babel-loader')
                .tap(opt=>{
                    opt={};
                    Object.assign(opt,{
                        appendTsxSuffixTo: [/\.vue$/]
                    });
                    return opt;
                });
                */
  },
  configureWebpack: {
    /*
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                extensions: ['.js', '.vue', '.json', '.ts', '.tsx']

            }
        });
        */

    // webpack plugins
    plugins: [
      // 引入Monaco支持
      new MonacoWebpackPlugin({
        // 支持语言配置
        languages: ["json"],
        features: ["find"],
      }),
    ]
  },
};
