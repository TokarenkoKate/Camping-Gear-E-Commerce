import { UiHStack } from "@/shared/ui/ui-stack/ui-hstack/ui-hstack";
import { PaymentChip } from "@/shared/ui/payment-chip/payment-chip";
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
