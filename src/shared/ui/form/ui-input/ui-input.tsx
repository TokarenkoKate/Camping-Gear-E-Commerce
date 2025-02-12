import { useRef } from "react";
import classNames from "classnames";
import { UiInputProps } from "@/shared/types/ui/ui-input";
import { UiHStack } from "../../ui-stack/ui-hstack/ui-hstack";
import cls from "./ui-input.m.scss";

export const UiInput = (props: UiInputProps) => {
  const { className, type = "text", ...otherProps } = props;

  const ref = useRef<HTMLInputElement>(null);
  const mods = {};

  return (
    <UiHStack className={classNames(cls.uiInput, mods, [className])}>
      <input
        ref={ref}
        type={type}
        className={cls.uiInputComponent}
        {...otherProps}
      />
    </UiHStack>
  );
};
