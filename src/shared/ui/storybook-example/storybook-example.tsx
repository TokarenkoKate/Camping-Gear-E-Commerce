import { PropsWithChildren } from "react";
import { UiBox } from "../ui-box/ui-box";
import { UiText } from "../ui-text/ui-text";
import { UiVStack } from "../ui-stack/ui-vstack/ui-vstack";
import classNames from "classnames";
import cls from "./stotybook-example.m.scss";

interface StorybookExampleProps extends PropsWithChildren {
  title: string;
  inverted?: boolean;
  transparent?: boolean;
}

export const StorybookExample = ({
  children,
  title,
  inverted,
  transparent,
}: StorybookExampleProps) => {
  return (
    <UiVStack
      className={classNames(cls.storybookExample, {
        [cls.inverted]: inverted,
        [cls.transparent]: transparent,
      })}
      max
    >
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
