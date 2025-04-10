import { setIn } from "final-form";
import { ObjectSchema, ValidationError } from "yup";

export const validateForm =
  <T>(schema: ObjectSchema<any>) =>
  async (values: T) => {
    try {
      await schema.validate(values, { abortEarly: false });
    } catch (err: unknown) {
      return (err as ValidationError).inner.reduce(
        (formError, innerError) =>
          setIn(formError, innerError.path as string, innerError.message),
        {}
      );
    }
    return null;
  };
