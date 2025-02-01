import { UiButtonCheckbox } from "./ui-button-checkbox";
import { UiCheckboxGroupProps } from "@/shared/types/ui/ui-checkbox";
import { useCheckboxGroup } from "@/shared/lib/hooks/ui/use-checkbox-group";
import cls from "./ui-button-checkbox-group.m.scss";

type UiButtonCheckboxGroupProps = UiCheckboxGroupProps;

export const UiButtonCheckboxGroup = (props: UiButtonCheckboxGroupProps) => {
  const { options, values, onChange, name, description } = props;
  const { changeHandler } = useCheckboxGroup({ options, values, onChange });

  return (
    <fieldset className={cls.uiButtonCheckboxGroup}>
      {description && (
        <legend className={cls.description}>{description}</legend>
      )}
      <ul className={cls.list} role="list">
        {options.map(({ value, label }, index) => {
          return (
            <li key={index}>
              <UiButtonCheckbox
                isChecked={values.includes(value.toString())}
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
