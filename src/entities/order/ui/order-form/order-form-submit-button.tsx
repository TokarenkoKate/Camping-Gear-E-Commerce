import { UiButton } from "@/shared/ui/ui-button/ui-button";
import cls from "./order-form.m.scss";

export const OrderFormSubmitButton = () => {
  return (
    <UiButton variant="background" className={cls.orderFormSubmitButton}>
      Place order
    </UiButton>
  );
};
