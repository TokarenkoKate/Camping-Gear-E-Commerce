import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

/**
 * For production config;
 * Used for minimizing CSS assets.
 */

export const buildCssMinimizerPlugin = () => {
  return new CssMinimizerPlugin({
    minimizerOptions: {
      preset: [
        "default",
        {
          discardComments: { removeAll: true },
        },
      ],
    },
  });
};
