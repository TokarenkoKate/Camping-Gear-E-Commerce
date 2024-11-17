import { Configuration } from "webpack";
import { mergeWithRules } from "webpack-merge";
import { BuildOptions } from "./types/config";
import { mergeRulesConfig } from "./const/config";
import { commonConfig } from "./configs/webpack.common";
import { developmentConfig } from "./configs/webpack.development";
import { productionConfig } from "./configs/webpack.production";

/**
 * Merges configurations depending on mode;
 * Merge using mergeWithRules helper to concatenate loaders in proper order;
 */
export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode } = options;

  switch (mode) {
    case "production":
      return mergeWithRules(mergeRulesConfig)(
        commonConfig(options),
        productionConfig(),
        { mode }
      );
    case "development":
      return mergeWithRules(mergeRulesConfig)(
        commonConfig(options),
        developmentConfig(options),
        { mode }
      );
    default:
      throw new Error(`Trying to use an unknown mode, ${mode}`);
  }
};
