import { UiBox, UiVStack, UiText } from "@/shared/ui";
import { ProductDetails } from "@/entities/product";
import cls from "../product-page.m.scss";

interface ProductSpecificationsProps {
  specifications: ProductDetails["specifications"];
}

export const ProductSpecifications = ({
  specifications,
}: ProductSpecificationsProps) => {
  const { imageUrl, rows } = specifications;
  return (
    <UiBox className={cls.productSpecifications}>
      <img className={cls.productSpecificationsImage} src={imageUrl} />
      <UiVStack className={cls.productSpecificationsContent} justify="between">
        <table className={cls.productSpecificationsTable}>
          {rows.map(({ name, value }) => {
            return (
              <tr key={name}>
                <td>
                  <UiText fontWeight="medium">{name}</UiText>
                </td>
                <td>
                  <UiText align="end">{value}</UiText>
                </td>
              </tr>
            );
          })}
        </table>
        <UiText variant="bodySm" tone="secondary">
          The published photos have been processed and adjusted to be as close
          to the actual color as possible. The color may look different from the
          actual color depending on your monitor settings, weather, lighting
          conditions, etc.
        </UiText>
      </UiVStack>
    </UiBox>
  );
};
