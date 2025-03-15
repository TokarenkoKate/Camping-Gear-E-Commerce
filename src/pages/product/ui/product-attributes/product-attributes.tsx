import { COMMA_SPACE } from "@/shared/const/common-string";
import { UiBox, UiVStack, UiText, ColorsList } from "@/shared/ui";
import { COLOR_CATEGORY_ATTRIBUTE_KEY } from "@/entities/category";
import { ProductDetails } from "@/entities/product";
import { getImageSrcPath } from "@/shared/lib/helpers/ui/image/get-image-src-path";
import cls from "../product-page/product-page.m.scss";

type ProductAttributesProps = Pick<
  ProductDetails,
  "attributes" | "detailsImages"
>;

export const ProductAttributes = ({
  attributes,
  detailsImages,
}: ProductAttributesProps) => {
  /**
   * get the last image from product details images
   */
  const image = detailsImages.at(-1);
  const imagePath = image ? getImageSrcPath(image) : null;

  return (
    <UiBox className={cls.productAttributes}>
      {imagePath && (
        <img className={cls.productAttributesImage} src={imagePath} />
      )}
      <UiVStack className={cls.productAttributesContent} justify="between">
        <table className={cls.productAttributesTable}>
          <tbody>
            {attributes.map(({ key, values }) => {
              return (
                <tr key={key}>
                  <td>
                    <UiText
                      fontWeight="medium"
                      className={cls.productAttributeName}
                    >
                      {key}
                    </UiText>
                  </td>
                  <td>
                    {key === COLOR_CATEGORY_ATTRIBUTE_KEY ? (
                      <ColorsList colors={values} />
                    ) : (
                      <UiText align="end">{values.join(COMMA_SPACE)}</UiText>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
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
