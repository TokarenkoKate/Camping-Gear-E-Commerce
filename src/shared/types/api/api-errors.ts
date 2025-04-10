import { AxiosError } from "axios";

/**
 * Type for a single error from server
 */
type ApiErrorType = string;
export type AxiosSingleError = AxiosError<ApiErrorType>;

/**
 * Type for a list of errors from server
 */
type ApiErrorsType = { errors: string[] };
export type AxiosMultipleErrors = AxiosError<ApiErrorsType>;

/**
 * Combined type for errors from server
 */
export type ApiAxiosError = AxiosSingleError | AxiosMultipleErrors;
