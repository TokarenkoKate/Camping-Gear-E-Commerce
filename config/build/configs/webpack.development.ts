import { Configuration } from "webpack";
import { BuildOptions } from "../types/config";
import { buildStyleLoader } from "../parts/loaders/css/build-style-loader";
import { buildDevTool } from "../parts/devtool/build-dev-tool";
import { buildDevServer } from "../parts/dev-server/build-webpack-plugin-serve";

export const developmentConfig = (options: BuildOptions): Configuration => {
  const { port } = options;

  /** loaders */
  const styleLoader = buildStyleLoader();

  /** devtool */
  const devtool = buildDevTool("development");

  /** dev server */
  const pluginServe = buildDevServer(port);

  return {
    watch: true,
    watchOptions: {
      ignored: ["dist/**/*", "docs/**/*", "node_modules/**/*", "public/**/*"],
    },
    devtool,
    module: {
      rules: [styleLoader],
    },
    devServer: pluginServe,
  };
};
