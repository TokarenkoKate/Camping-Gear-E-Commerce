import { WebpackPluginServe } from "webpack-plugin-serve";
import { BuildPaths } from "../../types/config";

/**
 * For development config;
 * Used as a dev server;
 */
export const buildWebpackPluginServe = (paths: BuildPaths) => {
  return new WebpackPluginServe({
    port: parseInt(process.env.PORT || "", 10) || 8080,
    static: paths.build,
    liveReload: true,
    waitForBuild: true,
    historyFallback: {
      htmlAcceptHeaders: ["text/html", "*/*"],
      rewrites: [],
    },
    open: true,
  });
};
