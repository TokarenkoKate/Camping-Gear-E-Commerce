import { UiText } from "@/shared/ui";
import { ArticleBlock } from "@/entities/article";

interface ArticleBlockSubtitleProps {
  articleBlock: ArticleBlock;
}

export const ArticleBlockSubtitle = ({
  articleBlock,
}: ArticleBlockSubtitleProps) => {
  return <UiText variant="headingMd">{articleBlock.content}</UiText>;
};
