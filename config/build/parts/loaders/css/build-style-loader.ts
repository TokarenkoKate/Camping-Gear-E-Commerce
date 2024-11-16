/**
 * For development config;
 * Used for injecting css to DOM, implements HMR;
 */

export const buildStyleLoader = () => {
  return { test: /\.s[ac]ss$/i, use: ["style-loader"] };
};
