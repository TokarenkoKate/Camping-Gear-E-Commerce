import { UiBox } from "@/shared/ui";
import { ArticlePreviewCard } from "@/entities/article";
import {
  aboutPageCompanyMessage1,
  aboutPageCompanyMessage2,
} from "../../model/const/about-page";
import cls from "../page/about-page.m.scss";

export const AboutPageMessages = () => {
  return (
    <UiBox className={cls.aboutPageMessages}>
      <ArticlePreviewCard
        article={aboutPageCompanyMessage1}
        cardType="medium"
        localImg
      />
      <ArticlePreviewCard
        article={aboutPageCompanyMessage2}
        cardType="medium"
        localImg
      />
    </UiBox>
  );
};
