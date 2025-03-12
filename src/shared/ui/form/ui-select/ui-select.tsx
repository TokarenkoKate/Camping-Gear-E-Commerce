import ArrowDown from "@/shared/assets/icons/arrow-down.svg";
import ArrowUp from "@/shared/assets/icons/arrow-up.svg";
import Empty from "@/shared/assets/icons/empty.svg";
import { EMPTY_STRING } from "@/shared/const/common-string";
import { useSelectAutocomplete } from "@/shared/lib/hooks/ui/use-select-autocomplete";
import { UiSelectProps } from "@/shared/types/ui/ui-select";
import { UiBox } from "../../ui-box/ui-box";
import { UiIcon } from "../../ui-icon/ui-icon";
import { UiHStack } from "../../ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "../../ui-stack/ui-vstack/ui-vstack";
import { UiText } from "../../ui-text/ui-text";
import { UiSelectOptionComponent } from "./ui-select-option";
import { UiPortal } from "../../ui-portal/ui-portal";
import cls from "./ui-select.m.scss";

export const UiSelect = (props: UiSelectProps) => {
  const { ariaLabel = EMPTY_STRING, value, options, ...rest } = props;

  const {
    containerNode,
    comboboxNode,
    buttonNode,
    listboxNode,
    isListboxOpen,
    inputValue,
    displayedOptions,
    onKeyDownCombobox,
    onClickCombobox,
    onChangeInputValue,
    selectedOptionValue,
    activeOptionValue,
    onFocusOption,
    onSelectOption,
    listboxStyle,
  } = useSelectAutocomplete({ options, value });

  return (
    <UiBox className={cls.uiSelect}>
      <UiHStack
        className={cls.uiSelectGroup}
        onClick={onClickCombobox}
        ref={containerNode}
      >
        <input
          id="select-input"
          className={cls.uiSelectComponent}
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isListboxOpen}
          aria-controls="select-listbox"
          ref={comboboxNode}
          value={inputValue}
          onChange={onChangeInputValue}
          onKeyDown={onKeyDownCombobox}
          autoComplete="off"
          {...rest}
        />
        <button
          type="button"
          id="select-button"
          aria-label={ariaLabel}
          aria-expanded={isListboxOpen}
          aria-controls="select-listbox"
          className={cls.uiSelectButton}
          tabIndex={-1}
          ref={buttonNode}
        >
          <UiIcon Svg={isListboxOpen ? ArrowUp : ArrowDown} />
        </button>
      </UiHStack>
      <UiPortal>
        <ul
          role="list"
          className={cls.uiSelectListBox}
          aria-label={ariaLabel}
          ref={listboxNode}
          style={listboxStyle}
        >
          {displayedOptions.length ? (
            displayedOptions.map((option) => {
              return (
                <UiSelectOptionComponent
                  option={option}
                  key={option.value}
                  isFocused={activeOptionValue === option.value}
                  isSelected={selectedOptionValue === option.value}
                  onFocusOption={onFocusOption}
                  onSelectOption={onSelectOption}
                />
              );
            })
          ) : (
            <UiVStack
              className={cls.uiSelectListBoxEmpty}
              max
              align="center"
              justify="center"
            >
              <UiIcon Svg={Empty} />
              <UiText>No data</UiText>
            </UiVStack>
          )}
        </ul>
      </UiPortal>
    </UiBox>
  );
};
