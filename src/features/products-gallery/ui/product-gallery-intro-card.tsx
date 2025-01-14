import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import { UiButton } from "@/shared/ui/ui-button/ui-button";
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
