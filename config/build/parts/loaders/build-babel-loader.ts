import babelRemovePropsPlugin from "../babel/babel-remove-props-plugin";

interface BuildBabelLoaderProps {
  isTsx: boolean;
}

/**
 * Used for transforming JSX and TypeScript, transpiling modern JavaScript;
 * NOTE: does not perform type checking as ts-loader;
 */

export function buildBabelLoader({ isTsx }: BuildBabelLoaderProps) {
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          [
            "@babel/preset-env",
            // Ensure Babel does not convert ES Modules to CommonJS for webpack tree shaking
            { modules: false },
          ],
          [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
        ],
        plugins: [
          [
            "@babel/plugin-transform-typescript",
            {
              isTSX: isTsx,
              allExtensions: true,
            },
          ],
          // Ensures polyfills are loaded only if needed
          ["@babel/plugin-transform-runtime"],
          isTsx && [
            babelRemovePropsPlugin,
            {
              props: ["data-testid"],
            },
          ],
        ].filter(Boolean),
      },
    },
  };
}
