import { CustomizeRule } from "webpack-merge";

/** used for mergeRules helper from 'webpack-merge'
 * to use prod and dev loaders earlier than common rules */
export const mergeRulesConfig = {
  module: {
    rules: {
      test: CustomizeRule.Match,
      use: CustomizeRule.Prepend,
    },
  },
};
