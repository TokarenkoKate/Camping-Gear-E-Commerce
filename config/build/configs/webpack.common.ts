import { Configuration } from "webpack";
import { BuildOptions } from "../types/config";
import { buildBabelLoader } from "../parts/loaders/build-babel-loader";
import { buildCommonCssLoader } from "../parts/loaders/css/build-common-css-loader";
import { buildImageLoader } from "../parts/loaders/build-image-loader";
import { buildFontLoader } from "../parts/loaders/build-font-loader";
import { buildForkTsCheckerPlugin } from "../parts/plugins/build-fork-ts-checker-plugin";
import { buildHtmlWebpackPlugin } from "../parts/plugins/build-html-webpack-plugin";
import { buildResolvers } from "../parts/resolvers/build-resolvers";
import { buildEnvPlugin } from "../parts/plugins/build-env-plugin";

export const commonConfig = (options: BuildOptions): Configuration => {
  const { paths } = options;

  /** loaders */
  const codeBabelLoader = buildBabelLoader({ isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ isTsx: true });
  const commonCSSLoader = buildCommonCssLoader();
  const imageLoader = buildImageLoader();
  const fontLoader = buildFontLoader();

  /** resolvers */
  const resolvers = buildResolvers(paths);

  /** plugins */
  const envPlugin = buildEnvPlugin();
  const htmlWebpackPlugin = buildHtmlWebpackPlugin(paths);
  const forkTsCheckerPlugin = buildForkTsCheckerPlugin();

  return {
    entry: [paths.entry],
    output: {
      filename: "[name].[contenthash].js",
      chunkFilename: "[name].[contenthash].js",
      assetModuleFilename: "[name].[contenthash][ext][query]",
      path: paths.build,
      clean: true,
      publicPath: "",
    },
    resolve: resolvers,
    module: {
      rules: [
        codeBabelLoader,
        tsxCodeBabelLoader,
        commonCSSLoader,
        imageLoader,
        fontLoader,
      ],
    },
    plugins: [envPlugin, htmlWebpackPlugin, forkTsCheckerPlugin],
  };
};
