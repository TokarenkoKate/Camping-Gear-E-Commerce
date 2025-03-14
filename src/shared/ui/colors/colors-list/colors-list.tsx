import classNames from "classnames";
import { ColorTag } from "../..";
import { UiBox } from "../../ui-box/ui-box";
import { UiHStack } from "../../ui-stack/ui-hstack/ui-hstack";
import cls from "./colors-list.m.scss";

interface ColorsListProps {
  colors: string[] | undefined;
  className?: string;
}

export const ColorsList = ({ colors, className }: ColorsListProps) => {
  if (!colors) {
    return null;
  }

  return (
    <UiHStack
      className={classNames(cls.colorsList, className)}
      as="ul"
      role="list"
    >
      {colors.map((color) => (
        <UiBox key={color} as="li">
          <ColorTag color={color} />
        </UiBox>
      ))}
    </UiHStack>
  );
};
