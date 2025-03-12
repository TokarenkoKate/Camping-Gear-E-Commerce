import { UiButton } from "@/shared/ui";
import cls from "./order-form.m.scss";

export const OrderFormSubmitButton = () => {
  return (
    <UiButton variant="background" className={cls.orderFormSubmitButton}>
      Place order
    </UiButton>
  );
};
