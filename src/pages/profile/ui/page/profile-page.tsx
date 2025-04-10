import { UiButton, UiVStack } from "@/shared/ui";
import { ProfilePageInfo } from "../info/profile-page-info";
import LogOut from "@/shared/assets/icons/log-out.svg";
import { useProfilePage } from "../../model/hooks/use-profile-page";
import cls from "./profile-page.m.scss";

export const ProfilePage = () => {
  const { onLogout } = useProfilePage();

  return (
    <UiVStack className={cls.profilePage}>
      <ProfilePageInfo />
      <UiButton variant="outlined" leftIconSvg={LogOut} onClick={onLogout}>
        Log out
      </UiButton>
    </UiVStack>
  );
};
