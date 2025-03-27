import { UiButton, UiIcon, UiText, UiVStack } from "@/shared/ui";
import JournalJPEG from "@/shared/assets/images/journal.jpg";
import JournalAvif from "@/shared/assets/images/journal.avif";
import ArrowRightLong from "@/shared/assets/icons/arrow-right-long.svg";
import cls from "../page/journal-page.m.scss";

export const JournalPageHeader = () => {
  return (
    <UiVStack className={cls.journalPageHeader}>
      <picture>
        <source srcSet={JournalAvif} type="image/avif" />
        <img
          src={JournalJPEG}
          alt="Journal section main image"
          className={cls.journalPageHeaderImage}
        />
      </picture>
      <UiVStack className={cls.journalPageHeaderContent}>
        <UiText tone="inverted" variant="headingLg" as="h2">
          Under the Stars
          <br />
          <UiIcon Svg={ArrowRightLong} className={cls.journalPageHeaderArrow} />
          this fall
        </UiText>
        <UiText tone="inverted">
          Step into the nocturnal realm with our latest camping blog post, where
          we uncover the enchanting experience of camping under the night sky.
          From stargazing tips to embracing the tranquility of nature after
          dark, join us as we illuminate the magic of outdoor nocturnal
          adventures. Get ready to discover the allure of camping beneath a
          blanket of stars
        </UiText>
        <UiButton variant="outlinedInverted" asLink>
          Show now
        </UiButton>
      </UiVStack>
    </UiVStack>
  );
};
