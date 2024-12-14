import { PropsWithChildren } from "react";
import { UiBox } from "../ui-box/ui-box";
import { UiText } from "../ui-text/ui-text";
import { UiVStack } from "../ui-stack/ui-vstack/ui-vstack";
import cls from "./stotybook-example.m.scss";

interface StorybookExampleProps extends PropsWithChildren {
  title: string;
}

export const StorybookExample = ({
  children,
  title,
}: StorybookExampleProps) => {
  return (
    <UiVStack className={cls.storybookExample} max>
      <UiBox className={cls.storybookExampleHeader} max>
        <UiText as="h2" variant="headingXs" fontWeight="medium">
          {title}
        </UiText>
      </UiBox>
      <UiBox className={cls.storybookExampleContent} max>
        {children}
      </UiBox>
    </UiVStack>
  );
};
