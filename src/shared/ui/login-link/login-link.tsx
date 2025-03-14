import { appRoutesPaths } from "@/shared/const/router";
import { UiLink } from "../ui-link/ui-link";
import { UiText } from "../ui-text/ui-text";

export const LoginLink = () => {
  return (
    <UiText as="span">
      {`Already registered? `}
      <UiText as="span">
        <UiLink to={appRoutesPaths.login} tone="accent">{`Login `}</UiLink>
        now
      </UiText>
    </UiText>
  );
};
