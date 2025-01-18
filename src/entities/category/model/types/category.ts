export interface Category {
  name: string;
  description?: string;
  href: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}
