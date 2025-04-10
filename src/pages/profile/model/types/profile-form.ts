import { ProfileFormInputName } from "../const/profile-form";

export type ProfileFormValues = {
  [ProfileFormInputName.fullName]: string;
  [ProfileFormInputName.email]: string;
};
