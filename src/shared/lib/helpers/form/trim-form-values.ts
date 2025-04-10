/**
 * This helper will iterate over the values and trim any strings
 */
export const trimFormValues = <T extends Record<string, any>>(values: T): T => {
  const trimmedValues = {} as T;

  for (const key in values) {
    if (typeof values[key] === "string") {
      trimmedValues[key] = values[key].trim();
    } else {
      trimmedValues[key] = values[key]; // Keep other types (e.g., numbers, arrays, etc.) unchanged
    }
  }

  return trimmedValues as T;
};
