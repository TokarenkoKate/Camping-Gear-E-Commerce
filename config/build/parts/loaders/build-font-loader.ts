/**
 * For common config;
 * Used for fonts processing;
 * NOTE: if some fonts will have small size, we can change type to "asset" and specify size limit to inline fonts
 */

export const buildFontLoader = () => {
  return {
    test: /\.(ttf|eot|woff|woff2)$/,
    type: "asset/resource",
  };
};
