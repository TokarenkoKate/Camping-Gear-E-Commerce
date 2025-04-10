import LogOut from "@/shared/assets/icons/log-out.svg";
import { UiButton, UiDivider, UiVStack } from "@/shared/ui";
import { ProfilePageInfo } from "../info/profile-page-info";
import { useProfilePage } from "../../model/hooks/use-profile-page";
import cls from "./profile-page.m.scss";

export const ProfilePage = () => {
  const { initialProfileFormValues, onSubmitProfileForm, onLogout } =
    useProfilePage();

  return (
    <UiVStack className={cls.profilePage}>
      <ProfilePageInfo
        initialProfileFormValues={initialProfileFormValues}
        onSubmitProfileForm={onSubmitProfileForm}
      />
      <UiDivider orientation={"horizontal"} />
      <UiButton variant="outlined" leftIconSvg={LogOut} onClick={onLogout}>
        Log out
      </UiButton>
    </UiVStack>
  );
};
