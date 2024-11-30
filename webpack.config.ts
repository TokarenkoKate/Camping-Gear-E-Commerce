import path from "path";
import { buildWebpackConfig } from "./config/build/build-webpack-config";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import argv from "webpack-nano/argv";

export default () => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const {
    mode: argMode = "development",
    port: argPort,
    apiUrl: argApiUrl,
  } = argv as unknown as BuildEnv;

  const mode = argMode || "development";
  const PORT = argPort || 3000;
  const apiUrl = argApiUrl || "http://localhost:8000";

  const config = buildWebpackConfig({
    mode,
    paths,
    port: PORT,
    apiUrl,
  });

  return config;
};
