const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    devtool: "cheap-module-source-map",
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
      path: __dirname + "/dist",
      publicPath: "/",
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader"
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss"
              }
            }
          ]
        },
        {
          test: /\.module\.css$/,
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]_[local]_[hash:base64:5]",
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss"
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|jpeg|gif|pdf|svg)$/,
          loader: "url-loader?limit=8000&name=images/[name].[ext]"
        }
      ]
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: __dirname + "/src/index.html",
        inject: "body",
        filename: "./index.html"
      }),
      new webpack.DefinePlugin(envKeys)
    ],
    devServer: {
      contentBase: "./dist",
      hot: true
    }
  };
};
