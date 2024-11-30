import { BuildPaths } from "../../types/config";

export const buildResolvers = (paths: BuildPaths) => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    modules: [paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {
      "@": paths.src,
    },
  };
};
