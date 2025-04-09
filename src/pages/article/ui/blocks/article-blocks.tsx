import { UiVStack } from "@/shared/ui";
import { ArticleBlock } from "@/entities/article";
import { articleBlockComponent } from "../../model/const/article-block";
import cls from "./article-blocks.m.scss";

interface ArticleBlocksProps {
  articleBlocks: ArticleBlock[];
}

export const ArticleBlocks = ({ articleBlocks }: ArticleBlocksProps) => {
  return (
    <UiVStack className={cls.articleBlocks} as="section">
      {articleBlocks.map((articleBlock) => {
        const ArticleBlockComponent = articleBlockComponent[articleBlock.type];

        return (
          <ArticleBlockComponent
            articleBlock={articleBlock}
            key={articleBlock.id}
          />
        );
      })}
    </UiVStack>
  );
};
