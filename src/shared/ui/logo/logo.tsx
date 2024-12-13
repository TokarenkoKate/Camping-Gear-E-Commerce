import { INDEX_ROUTE_PATH } from "../../const/router";
import { UiIcon } from "../ui-icon/ui-icon";
import { UiLink } from "../ui-link/ui-link";
import LogoIcon from "../../assets/icons/logo-86-20.svg";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <UiLink to={INDEX_ROUTE_PATH} className={className}>
      <UiIcon Svg={LogoIcon} />
    </UiLink>
  );
};
