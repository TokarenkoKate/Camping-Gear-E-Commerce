import { UiHStack, UiVStack } from "@/shared/ui";
import { Skeleton } from "@/shared/ui/skeleton/skeleton";
import cls from "./product-card.m.scss";

export const ProductCardLoading = () => {
  return (
    <UiVStack className={cls.productCardLoading} max align="normal">
      <Skeleton height={300} width="100%" border={"12px"} />
      <UiHStack max justify="between">
        <Skeleton height={20} width={150} border={"6px"} />
        <Skeleton height={20} width={60} border={"6px"} />
      </UiHStack>
      <Skeleton height={30} width="100%" border={"6px"} />
    </UiVStack>
  );
};
