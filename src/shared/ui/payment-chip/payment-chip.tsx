import { UiIcon } from "../ui-icon/ui-icon";
import { UiHStack } from "../ui-stack/ui-hstack/ui-hstack";
import cls from "./payment-chip.m.scss";

interface PaymentChipProps {
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const PaymentChip = ({ icon }: PaymentChipProps) => {
  return (
    <UiHStack className={cls.paymentChip} align="center" justify="center">
      <UiIcon Svg={icon} className={cls.paymentChipImg} />
    </UiHStack>
  );
};
