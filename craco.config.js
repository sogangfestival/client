const CracoAlias = require("craco-alias");
const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./src/",
        aliases: {
          "@utils": "./utils",
          "@assets": "./assets",
          "@components": "./components",
          "@pages": "./pages",
          "@styles": "./styles",
        },
      },
    },
  ],
  webpack: {
    plugins: [new BundleAnalyzerPlugin({ analyzerMode: "server" })],
  },
};
