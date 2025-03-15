import { UiBox, UiVStack, UiText } from "@/shared/ui";
import { ProductDetails } from "@/entities/product";
import { getImageSrcPath } from "@/shared/lib/helpers/ui/image/get-image-src-path";
import cls from "../product-page/product-page.m.scss";

type ProductVisualProps = Pick<
  ProductDetails,
  "title" | "description" | "detailsImages"
>;

export const ProductVisuals = (props: ProductVisualProps) => {
  const { title, description, detailsImages } = props;
  const [imageA, imageB, imageC] = detailsImages;

  return (
    <UiBox className={cls.productVisuals}>
      <img
        src={getImageSrcPath(imageA)}
        className={cls.productVisualsImageA}
        alt="product visual representation image"
      />
      <UiVStack className={cls.productVisualsDescription} justify="between">
        <UiText variant="headingMd">{title}</UiText>
        <UiText>{description}</UiText>
      </UiVStack>
      <img
        src={getImageSrcPath(imageB)}
        className={cls.productVisualsImageB}
        alt="product visual representation image"
      />
      <img
        src={getImageSrcPath(imageC)}
        className={cls.productVisualsImageC}
        alt="product visual representation image"
      />
    </UiBox>
  );
};
