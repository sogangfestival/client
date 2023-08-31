const CracoAlias = require("craco-alias");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "jsconfig",
        jsConfigPath: "jsconfig.paths.json",
      },
    },
  ],
  webpack: {
    plugins: [new BundleAnalyzerPlugin({ analyzerMode: "server" })],
  },
};
