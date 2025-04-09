import { UiImage } from "@/shared/ui";
import { ArticleBlock } from "@/entities/article";
import { getImageSrcPath } from "@/shared/lib/helpers/ui/image/get-image-src-path";
import cls from "./article-blocks.m.scss";

interface ArticleBlockImageProps {
  articleBlock: ArticleBlock;
}

export const ArticleBlockImage = ({ articleBlock }: ArticleBlockImageProps) => {
  const imagePath = getImageSrcPath(articleBlock.content);
  return <UiImage src={imagePath} className={cls.articleBlockImage} />;
};
