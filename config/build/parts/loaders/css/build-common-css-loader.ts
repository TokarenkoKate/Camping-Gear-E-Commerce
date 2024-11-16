/**
 * For common config;
 * Used for converting css to js;
 * for prod and dev configs, it is necessary to add additional loaders
 * for either injecting css to DOM or extracting it to separate files;
 */

export const buildCommonCssLoader = () => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.m\.scss$/,
            localIdentName: "[local]--[hash:base64:5]",
            namedExport: false,
          },
        },
      },
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: { plugins: [require("autoprefixer")()] },
        },
      },
      { loader: "sass-loader" },
    ],
  };
};
