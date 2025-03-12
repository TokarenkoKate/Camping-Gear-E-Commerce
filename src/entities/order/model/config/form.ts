import { UiRadioOption } from "@/shared/types/ui/ui-radio";

export enum OrderFormSection {
  customer = "customer",
  shipping = "shipping",
  delivery = "delivery",
  payment = "payment",
}

export const orderFormSectionTitle: Record<OrderFormSection, string> = {
  [OrderFormSection.customer]: "Customer Info",
  [OrderFormSection.shipping]: "Shipping Address",
  [OrderFormSection.delivery]: "Delivery Method",
  [OrderFormSection.payment]: "Payment Method",
};

export enum OrderFormInputName {
  fullName = "fullName",
  email = "email",
  recipientName = "recipientName",
  phone = "phone",
  shippingDestination = "shippingDestination",
  region = "region",
  district = "district",
  area = "area",
  address = "address",
  deliveryMethod = "deliveryMethod",
  paymentMethod = "paymentMethod",
}

export const orderFormFieldPlaceholder: Record<OrderFormInputName, string> = {
  [OrderFormInputName.fullName]: "Full Name",
  [OrderFormInputName.email]: "Email Address",
  [OrderFormInputName.recipientName]: "Recipient Name",
  [OrderFormInputName.phone]: "Phone no.",
  [OrderFormInputName.shippingDestination]: "Shipping Destination",
  [OrderFormInputName.region]: "Region",
  [OrderFormInputName.district]: "District",
  [OrderFormInputName.area]: "Area",
  [OrderFormInputName.address]: "Address",
  [OrderFormInputName.deliveryMethod]: "Delivery Method",
  [OrderFormInputName.paymentMethod]: "Payment Method",
};

export const orderFormDeliveryMethodOptions: UiRadioOption[] = [
  {
    label: "UPS Expedited Shipping",
    value: "ups",
  },
  {
    label: "Priority Mail Express",
    value: "mail",
  },
];

export const orderFormPaymentMethodOptions: UiRadioOption[] = [
  {
    label: "Credit Cards",
    value: "credit",
  },
  {
    label: "Mobile Wallet",
    value: "mobile",
  },
];
