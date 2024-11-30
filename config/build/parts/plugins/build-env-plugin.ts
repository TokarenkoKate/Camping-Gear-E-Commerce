import { DefinePlugin } from "webpack";
import dotenv from "dotenv";

export const buildEnvPlugin = () => {
  const env = dotenv.config().parsed || {};

  const envKeys = Object.keys(env).reduce(
    (prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(env[next]);
      return prev;
    },
    {} as Record<string, string>
  );

  return new DefinePlugin(envKeys);
};
