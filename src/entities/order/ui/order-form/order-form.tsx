import { useForm } from "@/shared/lib/hooks/ui/use-form";
import { UiInput } from "@/shared/ui/form/ui-input/ui-input";
import { UiSelect } from "@/shared/ui/form/ui-select/ui-select";
import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { UiHStack } from "@/shared/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import classNames from "classnames";
import {
  orderFormDeliveryMethodOptions,
  orderFormFieldPlaceholder,
  OrderFormInputName,
  orderFormPaymentMethodOptions,
  orderFormSectionTitle,
} from "../../model/config/form";
import { OrderFormSection } from "./order-form-section";
import { UiFormField } from "@/shared/ui/form/ui-form-field/ui-form-field";
import { UiRadioButtonGroup } from "@/shared/ui/form/ui-radio-buttons/ui-radio-button-group/ui-radio-button-group";
import { OrderFormSubmitButton } from "./order-form-submit-button";
import cls from "./order-form.m.scss";

interface OrderFormProps {
  className?: string;
}

export const OrderForm = ({ className }: OrderFormProps) => {
  const Form = useForm();

  return (
    <UiBox className={classNames(cls.orderForm, className)} max>
      <Form onSubmit={() => {}}>
        <UiVStack className={cls.orderFormSections} max align="normal">
          <OrderFormSection title={orderFormSectionTitle.customer}>
            <UiHStack max className={cls.orderFormRow}>
              <UiFormField
                name={OrderFormInputName.fullName}
                placeholder={orderFormFieldPlaceholder.fullName}
                component={UiInput}
              />

              <UiFormField
                name={OrderFormInputName.email}
                placeholder={orderFormFieldPlaceholder.email}
                component={UiInput}
              />
            </UiHStack>
          </OrderFormSection>
          <OrderFormSection title={orderFormSectionTitle.shipping}>
            <UiVStack className={cls.orderFormColumn} max align="normal">
              <UiBox className={cls.orderFormRow}>
                <UiFormField
                  name={OrderFormInputName.recipientName}
                  placeholder={orderFormFieldPlaceholder.recipientName}
                  component={UiInput}
                />
                <UiFormField
                  name={OrderFormInputName.phone}
                  placeholder={orderFormFieldPlaceholder.phone}
                  component={UiInput}
                />
              </UiBox>
              <UiFormField
                name={OrderFormInputName.shippingDestination}
                placeholder={orderFormFieldPlaceholder.shippingDestination}
                component={UiInput}
              />
              <UiBox className={cls.orderFormRow}>
                <UiFormField
                  name={OrderFormInputName.region}
                  placeholder={orderFormFieldPlaceholder.region}
                  ariaLabel={orderFormFieldPlaceholder.region}
                  options={[]}
                  component={UiSelect}
                />
                <UiFormField
                  name={OrderFormInputName.district}
                  placeholder={orderFormFieldPlaceholder.district}
                  ariaLabel={orderFormFieldPlaceholder.district}
                  options={[]}
                  component={UiSelect}
                />
                <UiFormField
                  name={OrderFormInputName.area}
                  placeholder={orderFormFieldPlaceholder.area}
                  ariaLabel={orderFormFieldPlaceholder.area}
                  options={[]}
                  component={UiSelect}
                />
              </UiBox>
              <UiFormField
                name={OrderFormInputName.address}
                placeholder={orderFormFieldPlaceholder.address}
                component={UiInput}
              />
            </UiVStack>
          </OrderFormSection>
          <OrderFormSection title={orderFormSectionTitle.delivery}>
            <UiFormField
              name={OrderFormInputName.deliveryMethod}
              options={orderFormDeliveryMethodOptions}
              ariaLabelledBy={orderFormSectionTitle.delivery}
              component={UiRadioButtonGroup}
            />
          </OrderFormSection>
          <OrderFormSection title={orderFormSectionTitle.payment}>
            <UiFormField
              name={OrderFormInputName.paymentMethod}
              options={orderFormPaymentMethodOptions}
              ariaLabelledBy={orderFormSectionTitle.payment}
              component={UiRadioButtonGroup}
            />
          </OrderFormSection>
          <OrderFormSubmitButton />
        </UiVStack>
      </Form>
    </UiBox>
  );
};
