export enum ProfileFormInputName {
  fullName = "fullName",
  email = "email",
}

export const profileFormFieldPlaceholder: Record<ProfileFormInputName, string> =
  {
    [ProfileFormInputName.fullName]: "Full Name",
    [ProfileFormInputName.email]: "Email Address",
  };
