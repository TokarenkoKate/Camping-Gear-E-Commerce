import { UiHStack } from "@/shared/ui";
import { PaymentChip } from "@/shared/ui";
import { paymentChips } from "../model/const";
import cls from "./payment-chips.m.scss";

export const PaymentChips = () => {
  return (
    <UiHStack as="ul" className={cls.paymentChips}>
      {paymentChips.map(({ name, src }) => (
        <PaymentChip key={name} icon={src} />
      ))}
    </UiHStack>
  );
};
