import classNames from "classnames";
import EmptyList from "@/shared/assets/icons/empty-list.svg";
import { UiIcon } from "../ui-icon/ui-icon";
import { UiVStack } from "../ui-stack/ui-vstack/ui-vstack";
import { UiText } from "../ui-text/ui-text";
import cls from "./ui-empty.m.scss";

interface UiEmptyProps {
  title: string;
  description: string;
  className?: string;
}

export const UiEmpty = ({ title, description, className }: UiEmptyProps) => {
  return (
    <UiVStack max align="center" className={classNames(cls.uiEmpty, className)}>
      <UiIcon Svg={EmptyList} />
      <UiVStack align="center" className={cls.uiEmptyTexts}>
        <UiText tone="secondary" variant="headingSm" fontWeight="medium">
          {title}
        </UiText>
        <UiText tone="secondary" variant="bodyLg">
          {description}
        </UiText>
      </UiVStack>
    </UiVStack>
  );
};
