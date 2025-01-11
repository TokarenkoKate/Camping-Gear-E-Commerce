import { UiIcon } from "../ui-icon/ui-icon";
import { UiLink } from "../ui-link/ui-link";
import cls from "./social-link.m.scss";

interface SocialIconProps {
  to: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SocialLink = ({ to, Svg }: SocialIconProps) => {
  return (
    <UiLink to={to} className={cls.socialLink} target="_blank">
      <UiIcon Svg={Svg} className={cls.icon} />
    </UiLink>
  );
};
