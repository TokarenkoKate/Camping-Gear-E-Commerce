import path from "path";
import { RuleSetRule } from "webpack";
import type { StorybookConfig } from "@storybook/react-webpack5";
import { BuildPaths } from "../build/types/config";
import { buildCommonCssLoader } from "../build/parts/loaders/css/build-common-css-loader";
import { buildStyleLoader } from "../build/parts/loaders/css/build-style-loader";

const config: StorybookConfig = {
  stories: [
    "../../src/**/*.mdx",
    "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),
  webpackFinal: async (config) => {
    const paths: BuildPaths = {
      build: "",
      html: "",
      entry: "",
      src: path.resolve(__dirname, "..", "..", "src"),
    };

    config.resolve?.modules?.unshift(paths.src);
    config.resolve?.extensions?.push(".ts", ".tsx");

    // absolute imports;
    config.resolve!.alias = {
      ...config.resolve!.alias,
      "@": paths.src,
    };

    // css;
    config.module?.rules?.push(buildStyleLoader());
    config.module?.rules?.push(buildCommonCssLoader());

    // skip default svg loader svg;
    if (config.module?.rules) {
      config.module.rules = config.module?.rules?.map(
        (rule: RuleSetRule | null | undefined | false | 0 | "" | "...") => {
          if (rule && rule !== "..." && /svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/ };
          }
          return rule;
        }
      );
    }

    // use svgr loader for svg files instead of default loader;
    config?.module?.rules?.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
export default config;
