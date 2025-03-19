import { BuildOptions } from "../../types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

/**
 * For development config;
 * Used as a dev server;
 */

export function buildDevServer(
  port: BuildOptions["port"]
): DevServerConfiguration {
  return {
    port: port,
    open: true,
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: false,
    },
  };
}
