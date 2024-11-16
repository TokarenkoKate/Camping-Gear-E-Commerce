import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";

export const buildImageMinimizerPlugin = () => {
  return new ImageMinimizerPlugin({
    minimizer: {
      implementation: ImageMinimizerPlugin.imageminMinify,
      options: {
        plugins: [
          ["imagemin-mozjpeg", { quality: 65 }], // JPEG optimization
          ["imagemin-pngquant", { quality: [0.65, 0.9] }], // PNG optimization
        ],
      },
    },
  });
};
