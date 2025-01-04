import { PropsWithChildren } from "react";
import { UiBox } from "../ui-box/ui-box";
import { UiText } from "../ui-text/ui-text";
import { UiVStack } from "../ui-stack/ui-vstack/ui-vstack";
import cls from "./stotybook-example.m.scss";
import classNames from "classnames";

interface StorybookExampleProps extends PropsWithChildren {
  title: string;
  inverted?: boolean;
}

export const StorybookExample = ({
  children,
  title,
  inverted,
}: StorybookExampleProps) => {
  return (
    <UiVStack
      className={classNames(cls.storybookExample, { [cls.inverted]: inverted })}
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
