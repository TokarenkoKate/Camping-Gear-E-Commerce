import { Configuration } from "webpack";
import { BuildOptions } from "../types/config";
import { buildStyleLoader } from "../parts/loaders/css/build-style-loader";
import { buildWebpackPluginServe } from "../parts/plugins/build-webpack-plugin-serve";
import { buildDevTool } from "../parts/devtool/build-dev-tool";

export const developmentConfig = (options: BuildOptions): Configuration => {
  const { paths } = options;

  /** loaders */
  const styleLoader = buildStyleLoader();

  /** plugins */
  const pluginServe = buildWebpackPluginServe(paths);

  /** devtool */
  const devtool = buildDevTool("development");

  return {
    entry: ["webpack-plugin-serve/client"],
    watch: true,
    watchOptions: {
      ignored: ["dist/**/*", "docs/**/*", "node_modules/**/*", "public/**/*"],
    },
    devtool,
    module: {
      rules: [styleLoader],
    },
    plugins: [pluginServe],
  };
};
