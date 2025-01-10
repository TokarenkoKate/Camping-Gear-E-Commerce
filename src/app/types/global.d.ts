/** Allow CSS modules */
declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "*.svg" {
  import { VFC } from "react";

  const SVG: VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

/** Allow CSS variables as CSS Properties */
declare module "csstype" {
  interface Properties {
    [index: `--${string}`]: string;
  }
}
