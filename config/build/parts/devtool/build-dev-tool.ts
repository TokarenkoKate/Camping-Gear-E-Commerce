import { BuildMode } from "../../types/config";

export const buildDevTool = (mode: BuildMode) => {
  switch (mode) {
    case "development":
      // source map with original lines quality;
      return "eval-cheap-module-source-map";

    // source map with lines and columns mappings, but without source code;
    case "production":
      return "nosources-source-map";

    default:
      return "none";
  }
};
