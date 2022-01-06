const webpack = require("webpack");
const { getWebpackTools } = require("react-native-monorepo-tools");

const monorepoWebpackTools = getWebpackTools();

module.exports = {
  babel: {
    presets: ["module:metro-react-native-babel-preset", "@babel/preset-react"]
  },
  webpack: {
    configure: (webpackConfig) => {
      // Allow importing from external workspaces.
      monorepoWebpackTools.enableWorkspacesResolution(webpackConfig);
      // Ensure nohoisted libraries are resolved from this workspace.
      monorepoWebpackTools.addNohoistAliases(webpackConfig);
      // Enable support for .web.tsx components
      webpackConfig.resolve.extensions.unshift("web.ts", "web.tsx")
      return webpackConfig;
    },
    alias: {
      "react-native-webview": "react-native-web-webview"
    },
    plugins: [
      // Inject the React Native "__DEV__" global variable.
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== "production",
      }),
    ],
  },
};
