import { INDEX_ROUTE_PATH } from "../../const/router";
import { UiIcon } from "../ui-icon/ui-icon";
import { UiLink } from "../ui-link/ui-link";
import LogoIcon from "../../assets/icons/logo-86-20.svg";
import cls from "./logo.m.scss";

interface LogoProps {
  className?: string;
  size?: "md" | "lg";
}

const logoSizeClassnames: Record<"md" | "lg", string> = {
  md: cls.logoMedium,
  lg: cls.logoLarge,
};

export const Logo = ({ className, size = "md" }: LogoProps) => {
  return (
    <UiLink to={INDEX_ROUTE_PATH} className={className} viewTransition>
      <UiIcon Svg={LogoIcon} className={logoSizeClassnames[size]} />
    </UiLink>
  );
};
