export enum Errors {
  Error_400 = "Error_400",
  Error_401 = "Error_401",
  Error_403 = "Error_403",
  Error_404 = "Error_404",
  Error_500 = "Error_500",
  Error_Network = "Error_Network",
}

export const errorMessages = {
  [Errors.Error_400]: "Bad request.",
  [Errors.Error_401]: "Unauthorized error.",
  [Errors.Error_403]: "Access denied.",
  [Errors.Error_404]: "Not found.",
  [Errors.Error_500]: "Internal error.",
  [Errors.Error_Network]: "Network error",
};
