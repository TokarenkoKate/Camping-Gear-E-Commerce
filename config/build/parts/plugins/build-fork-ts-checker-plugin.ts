import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

/**
 * For common config;
 * Used for type checking in a separate process;
*/
export const buildForkTsCheckerPlugin = () => {
  return new ForkTsCheckerWebpackPlugin({
    typescript: {
      diagnosticOptions: {
        semantic: true,
        syntactic: true,
      },
    },
  });
};
