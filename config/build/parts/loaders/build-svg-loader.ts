/**
 * For common config;
 * Used to transform SVG into React components;
 * Also optimizes SVG with SVGO;
 */

export const buildSvgLoader = () => {
  return {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  };
};
