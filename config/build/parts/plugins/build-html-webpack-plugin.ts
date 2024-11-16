import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildPaths } from "../../types/config";

/**
 * For common config;
 * inserts webpack bundles in the body using script tags.
 */
export const buildHtmlWebpackPlugin = (paths: BuildPaths) => {
  return new HtmlWebpackPlugin({
    template: paths.html,
  });
};
