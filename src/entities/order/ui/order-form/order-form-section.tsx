import { PropsWithChildren, ReactNode } from "react";
import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import { UiHStack } from "@/shared/ui/ui-stack/ui-hstack/ui-hstack";
import cls from "./order-form.m.scss";

interface OrderFormSectionProps {
  title: string;
  extraContent?: ReactNode;
}

export const OrderFormSection = ({
  title,
  extraContent,
  children,
}: PropsWithChildren<OrderFormSectionProps>) => {
  return (
    <UiVStack className={cls.orderFormSection}>
      <UiHStack max justify="between">
        <UiText variant="headingSm" className={cls.orderFormSectionTitle}>
          {title}
        </UiText>
        {extraContent}
      </UiHStack>
      {children}
    </UiVStack>
  );
};
