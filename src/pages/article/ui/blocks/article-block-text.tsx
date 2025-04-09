import { UiText } from "@/shared/ui";
import { ArticleBlock } from "@/entities/article";

interface ArticleBlockTextProps {
  articleBlock: ArticleBlock;
}

export const ArticleBlockText = ({ articleBlock }: ArticleBlockTextProps) => {
  return <UiText>{articleBlock.content}</UiText>;
};
