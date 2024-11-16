import MiniCssExtractPlugin from "mini-css-extract-plugin";

/**
 * For production config;
 * Used for extracting css to separate files, that allows browser to load JS and CSS files in parallel;
 */

export const buildMiniCssExtractLoader = () => {
  return {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader],
  };
};
