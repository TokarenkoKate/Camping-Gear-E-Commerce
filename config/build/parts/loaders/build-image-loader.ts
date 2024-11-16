/**
 * For common config;
 * Used for image processing.
 * Depending on the size limit, images are either inlined as a Base64 string or emitted to a separate file;
 */

export const buildImageLoader = () => {
  return {
    test: /\.(png|jpe?g|gif)$/i,
    type: "asset",
    parser: { dataUrlCondition: { maxSize: 8192 } },
    generator: {
      filename: "images/[hash][ext][query]", // hash for for long-term caching
    },
  };
};
