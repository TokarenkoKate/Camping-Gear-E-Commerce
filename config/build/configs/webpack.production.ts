import { Configuration } from "webpack";
import { buildMiniCssExtractLoader } from "../parts/loaders/css/build-mini-css-extract-loader";
import { buildMiniCssExtractPlugin } from "../parts/plugins/css/build-mini-css-extract-plugin";
import { buildDevTool } from "../parts/devtool/build-dev-tool";
import { buildCssMinimizerPlugin } from "../parts/plugins/css/build-css-minimixer-plugin";
import { buildImageMinimizerPlugin } from "../parts/plugins/build-image-minimizer-plugin";

export const productionConfig = (): Configuration => {
  /** loaders */
  const miniCssExtractorLoader = buildMiniCssExtractLoader();

  /** plugins */
  const miniCssExtractPlugin = buildMiniCssExtractPlugin();
  const terserPluginMinimizer = "..."; // shortcut for default Terser minimizer
  const cssMinimizerPlugin = buildCssMinimizerPlugin();
  const imageMinimizer = buildImageMinimizerPlugin();

  /** devtool */
  const devtool = buildDevTool("production");

  return {
    module: {
      rules: [miniCssExtractorLoader],
    },
    plugins: [miniCssExtractPlugin],
    devtool,
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "initial",
          },
        },
      },
      runtimeChunk: { name: "runtime" },
      minimizer: [terserPluginMinimizer, cssMinimizerPlugin, imageMinimizer],
      minimize: true,
      usedExports: true,
    },
  };
};
