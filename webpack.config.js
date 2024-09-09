const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "udistrital";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });
  console.log("PATH ", path.resolve(__dirname, "assets/i18n"));
  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    context: path.resolve(__dirname),
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isProd: webpackConfigEnv && webpackConfigEnv.isProd,
          isDev: webpackConfigEnv && webpackConfigEnv.isDev,
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
        favicon: "./src/favicon.ico",
      }),
      new DefinePlugin({
        isProd: webpackConfigEnv && webpackConfigEnv.isProd,
        isDev: webpackConfigEnv && webpackConfigEnv.isDev,
        isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "src/assets/i18n"),
            to: "assets/i18n",
          },
        ],
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      compress: true,
      port: 4200,
      historyApiFallback: true,
    },
  });
};
