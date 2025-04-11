import { StoryFn } from "@storybook/react";
import type { Meta } from "@storybook/react";
import { StorybookExample } from "../storybook-example/storybook-example";
import { PaymentChip as PaymentChipComponent } from "./payment-chip";
import ApplePay from "@/shared/assets/icons/payment/apple-pay.svg";
import GooglePay from "@/shared/assets/icons/payment/google-pay.svg";
import PayPal from "@/shared/assets/icons/payment/paypal.svg";
import { UiHStack } from "../ui-stack/ui-hstack/ui-hstack";

export default {
  component: PaymentChipComponent,
  title: "shared/payment-chip",
} as Meta<typeof PaymentChipComponent>;

export const PaymentChip = {
  render() {
    return <PaymentChipStory />;
  },
};

const PaymentChipStory: StoryFn = () => {
  return (
    <StorybookExample title="Payment chip">
      <UiHStack style={{ gap: "12px" }}>
        <PaymentChipComponent icon={ApplePay} />
        <PaymentChipComponent icon={GooglePay} />
        <PaymentChipComponent icon={PayPal} />
      </UiHStack>
    </StorybookExample>
  );
};
