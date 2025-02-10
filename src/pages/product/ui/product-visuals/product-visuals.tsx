import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import { ProductDetails } from "@/entities/product";
import cls from "../product-page.m.scss";

interface ProductVisualProps {
  visuals: ProductDetails["visuals"];
}

export const ProductVisuals = ({ visuals }: ProductVisualProps) => {
  const { title, description, imagesUrl } = visuals;
  const [imageA, imageB, imageC] = imagesUrl;

  return (
    <UiBox className={cls.productVisuals}>
      <img
        src={imageA}
        className={cls.productVisualsImageA}
        alt="product visual representation image"
      />
      <UiVStack className={cls.productVisualsDescription} justify="between">
        <UiText variant="headingMd">{title}</UiText>
        <UiText>{description}</UiText>
      </UiVStack>
      <img
        src={imageB}
        className={cls.productVisualsImageB}
        alt="product visual representation image"
      />
      <img
        src={imageC}
        className={cls.productVisualsImageC}
        alt="product visual representation image"
      />
    </UiBox>
  );
};
