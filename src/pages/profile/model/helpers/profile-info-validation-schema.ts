import { ValidationErrorMessage } from "@/shared/const/validation-errors";
import * as yup from "yup";

export const profileInfoValidationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required(ValidationErrorMessage.Required)
    .email(ValidationErrorMessage.InvalidEmail),
  fullName: yup.string().trim().required(ValidationErrorMessage.Required),
});
