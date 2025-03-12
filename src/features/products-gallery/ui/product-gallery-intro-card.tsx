import { UiBox, UiVStack, UiText, UiButton } from "@/shared/ui";
import cls from "./product-gallery.m.scss";

export interface ProductGalleryIntroCardProps {
  title: string;
  subtitle: string;
  linkText: string;
  linkTo: string;
}

export const ProductGalleryIntroCard = ({
  title,
  subtitle,
  linkText,
  linkTo,
}: ProductGalleryIntroCardProps) => {
  return (
    <UiVStack className={cls.productGalleryIntroCard}>
      <UiBox>
        <UiText variant="headingSm" className={cls.title}>
          {title}
        </UiText>
        <UiText>{subtitle}</UiText>
      </UiBox>
      <UiButton to={linkTo} variant="outlined">
        {linkText}
      </UiButton>
    </UiVStack>
  );
};
