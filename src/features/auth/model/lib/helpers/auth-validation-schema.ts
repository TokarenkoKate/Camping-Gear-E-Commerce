import { ValidationErrorMessage } from "@/shared/const/validation-errors";
import * as yup from "yup";

export const authValidationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required(ValidationErrorMessage.Required)
    .email(ValidationErrorMessage.InvalidEmail),
  password: yup
    .string()
    .trim()
    .min(4, ValidationErrorMessage.MinPassLength)
    .max(16, ValidationErrorMessage.MaxPassLength)
    .required(ValidationErrorMessage.Required),
});
