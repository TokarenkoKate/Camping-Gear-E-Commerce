import classNames from "classnames";
import PlusIcon from "@/shared/assets/icons/plus-20-20.svg";
import MinusIcon from "@/shared/assets/icons/minus-20-20.svg";
import { UiIcon } from "../ui-icon/ui-icon";
import { UiText } from "../ui-text/ui-text";
import { UiHStack } from "../ui-stack/ui-hstack/ui-hstack";
import cls from "./counter-button.m.scss";

interface CounterButtonProps {
  count: number;
  onIncrement: VoidFunction;
  onDecrement: VoidFunction;
}

export const CounterButton = ({
  count,
  onIncrement,
  onDecrement,
}: CounterButtonProps) => {
  return (
    <UiHStack className={cls.counterButton} justify="between" align="center">
      <button
        onClick={onDecrement}
        className={classNames(cls.button, cls.buttonLeft)}
      >
        <UiIcon Svg={MinusIcon} />
      </button>
      <UiText>{count}</UiText>
      <button
        onClick={onIncrement}
        className={classNames(cls.button, cls.buttonRight)}
      >
        <UiIcon Svg={PlusIcon} />
      </button>
    </UiHStack>
  );
};
