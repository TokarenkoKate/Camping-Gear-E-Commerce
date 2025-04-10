import { UiButtonCheckbox } from "./ui-button-checkbox";
import {
  UiCheckboxGroupProps,
  UiCheckboxValue,
} from "@/shared/types/ui/ui-checkbox";
import { useCheckboxGroup } from "@/shared/lib/hooks/ui/use-checkbox-group";
import cls from "./ui-button-checkbox-group.m.scss";

type UiButtonCheckboxGroupProps<T extends UiCheckboxValue> =
  UiCheckboxGroupProps<T>;

export const UiButtonCheckboxGroup = <T extends UiCheckboxValue>(
  props: UiButtonCheckboxGroupProps<T>
) => {
  const { options, values, onChange, name, description } = props;
  const { changeHandler } = useCheckboxGroup<T>({ options, values, onChange });

  return (
    <fieldset className={cls.uiButtonCheckboxGroup}>
      {description && (
        <legend className={cls.description}>{description}</legend>
      )}
      <ul className={cls.list} role="list">
        {options?.map(({ value, label }, index) => {
          const isChecked = Boolean(values?.includes(value.toString() as T));

          return (
            <li key={index}>
              <UiButtonCheckbox
                isChecked={isChecked}
                label={label}
                value={value}
                name={name}
                onChange={changeHandler}
              />
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
};
