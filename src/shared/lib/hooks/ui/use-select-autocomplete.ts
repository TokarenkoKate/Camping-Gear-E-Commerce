import {
  useRef,
  KeyboardEvent,
  useState,
  useMemo,
  ChangeEvent,
  useEffect,
} from "react";
import { EMPTY_STRING } from "@/shared/const/common-string";
import { UiSelectOption } from "@/shared/types/ui/ui-select";
import {
  getUiSelectNextOption,
  getUiSelectOptionByValue,
  getUiSelectPreviousOption,
} from "../../helpers/ui/select/ui-select-options-helpers";
import { getUiSelectListboxPosition } from "../../helpers/ui/select/get-ui-select-listbox-position";
import { useWindowResize } from "../use-window-resize";

// todo: пустые данные, закрытие при внешнем клике
export const useSelectAutocomplete = ({
  value,
  options,
}: {
  value?: string;
  options: UiSelectOption[];
}) => {
  const containerNode = useRef<HTMLDivElement>(null);
  const comboboxNode = useRef<HTMLInputElement>(null);
  const buttonNode = useRef<HTMLButtonElement>(null);
  const listboxNode = useRef<HTMLUListElement>(null);

  /* =======================================
   * States
   * =======================================
   */
  const [selectedOptionValue, setSelectedOptionValue] = useState<string | null>(
    value || null
  );
  const [isListboxOpen, setIsListboxOpen] = useState(false);
  const [inputValue, setInputValue] = useState(
    selectedOptionValue || EMPTY_STRING
  );
  const [searchInputValue, setSearchInputValue] = useState("");
  const [activeOptionValue, setActiveOptionValue] = useState<string | null>(
    null
  );

  /* =======================================
   * Listbox options
   * =======================================
   */
  const displayedOptions = useMemo(() => {
    if (!searchInputValue) {
      return options || [];
    }

    return (
      options.filter((option) => {
        const stringLabel = String(option.label).toLowerCase();
        const filter = (searchInputValue || EMPTY_STRING).toLowerCase();
        return stringLabel.includes(filter);
      }) || []
    );
  }, [inputValue, options]);

  /* =======================================
   * Listbox open state handlers
   * =======================================
   */
  const handleOpenListbox = () => {
    setIsListboxOpen(true);
  };

  const handleCloseListbox = () => {
    setIsListboxOpen(false);
  };

  /* =======================================
   * Search input handlers
   * =======================================
   */
  const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    const currentInputData =
      (event.nativeEvent as CompositionEvent).data || EMPTY_STRING;
    const currentValue = event.target.value || EMPTY_STRING;

    /**
     * On start input search, need to clear the prev input value
     */
    if (!searchInputValue) {
      handleOpenListbox();
      setInputValue(currentInputData);
      setSearchInputValue(currentInputData);
    } else {
      setInputValue(currentValue);
      setSearchInputValue(currentValue);
    }
  };

  const handleSetNewInputValue = (newValue: string | null) => {
    setInputValue(newValue || EMPTY_STRING);
    setSearchInputValue(EMPTY_STRING);
    comboboxNode.current?.setSelectionRange(0, 0);
  };

  /* =======================================
   * Listbox options handlers
   * =======================================
   */
  const onSelectOption = (option: UiSelectOption) => {
    handleSetNewInputValue(String(option.label));
    setSelectedOptionValue(String(option.value));
    setActiveOptionValue(null);
    handleCloseListbox();
    comboboxNode.current?.focus();
    comboboxNode.current?.setAttribute("aria-activedescendant", EMPTY_STRING);
  };

  const onFocusOption = (option: UiSelectOption | null) => {
    if (option) {
      setActiveOptionValue(String(option.value));
      comboboxNode.current?.setAttribute(
        "aria-activedescendant",
        String(option.value)
      );
    } else {
      setActiveOptionValue(null);
    }
  };

  const isOptionWithinMenuView = (optionElement: HTMLElement) => {
    if (optionElement && listboxNode.current) {
      const { top, bottom } = optionElement.getBoundingClientRect();
      const menuBounds = listboxNode.current.getBoundingClientRect();

      return top >= menuBounds.top && bottom <= menuBounds.bottom;
    }
  };

  const scrollOptionIntoView = (option: UiSelectOption | null) => {
    let childNode: HTMLElement | null = null;

    listboxNode.current?.childNodes.forEach((child) => {
      if ((child as HTMLElement).id === option?.value) {
        childNode = child as HTMLElement;
      }
    });

    if (childNode && !isOptionWithinMenuView(childNode)) {
      (childNode as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  /* =======================================
   * Combobox handlers
   * =======================================
   */
  const handleFocusCombobox = () => {
    comboboxNode.current?.focus();
    comboboxNode.current?.setAttribute("aria-activedescendant", EMPTY_STRING);
  };

  const onClickCombobox = () => {
    if (isListboxOpen) {
      handleCloseListbox();
      setActiveOptionValue(null);
    } else {
      handleOpenListbox();
      setInputValue(EMPTY_STRING);
      if (selectedOptionValue && comboboxNode.current) {
        // visibly display selected value in placeholder for the user to see the current selected option
        comboboxNode.current.placeholder = selectedOptionValue || EMPTY_STRING;
      }
    }
    handleFocusCombobox();
  };

  const handleFocusOptionOnComboboxType = (optionType: "next" | "prev") => {
    // on keyboard up or down, if none option is selected or focused,
    // get the 1-st option
    if (!activeOptionValue && !selectedOptionValue) {
      onFocusOption(displayedOptions[0]);
    } else if (displayedOptions.length > 1) {
      let optionToFocus: UiSelectOption | null = null;

      // on key up return the next option,
      // on key down return the previous
      const searchOptionHandler =
        optionType === "next"
          ? getUiSelectNextOption
          : getUiSelectPreviousOption;

      // if some option is selected,
      // focus the current selected option,
      // otherwise the following after active
      if (activeOptionValue) {
        optionToFocus = searchOptionHandler(
          activeOptionValue,
          displayedOptions
        );
      } else if (selectedOptionValue) {
        optionToFocus = searchOptionHandler(
          selectedOptionValue,
          displayedOptions
        );
      }

      onFocusOption(optionToFocus);
      scrollOptionIntoView(optionToFocus);
    }
  };

  const onKeyDownCombobox = (event: KeyboardEvent<HTMLInputElement>) => {
    let flag = false;
    const altKey = event.altKey;
    if (event.ctrlKey || event.shiftKey) {
      return;
    }

    switch (event.key) {
      case "Down":
      case "ArrowDown":
        if (displayedOptions.length > 0) {
          if (altKey) {
            handleOpenListbox();
          } else {
            if (!isListboxOpen) {
              handleOpenListbox();
            }
            handleFocusOptionOnComboboxType("next");
          }
        }
        flag = true;
        break;

      case "Up":
      case "ArrowUp":
        if (displayedOptions.length > 0) {
          if (!isListboxOpen) {
            handleOpenListbox();
          }
          handleFocusOptionOnComboboxType("prev");
        }
        flag = true;
        break;

      case "Enter":
        if (activeOptionValue) {
          const activeOption = getUiSelectOptionByValue(
            activeOptionValue,
            displayedOptions
          );

          if (activeOption) {
            onSelectOption(activeOption);
          }
        }
        flag = true;
        break;

      case "Esc":
      case "Escape":
        if (isListboxOpen) {
          handleSetNewInputValue(selectedOptionValue || EMPTY_STRING);
          setActiveOptionValue(null);
          handleCloseListbox();
          handleFocusCombobox();
        }
        flag = true;
        break;

      default:
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  };

  const onBackgroundPointerUp = (event: MouseEvent | TouchEvent) => {
    const target = event.target as Node;
    if (
      !comboboxNode.current?.parentElement?.contains(target) &&
      !listboxNode.current?.contains(target) &&
      !buttonNode.current?.contains(target)
    ) {
      if (isListboxOpen) {
        handleSetNewInputValue(selectedOptionValue || EMPTY_STRING);
        setActiveOptionValue(null);
        handleCloseListbox();
        handleFocusCombobox();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("pointerup", onBackgroundPointerUp);

    return () => {
      document.removeEventListener("pointerup", onBackgroundPointerUp);
    };
  });

  /* =======================================
   * Listbox position
   * =======================================
   * TODO: set up proper positioning for portal on scroll
   */
  const parentRect = containerNode.current?.getBoundingClientRect();
  const portalRect = listboxNode.current?.getBoundingClientRect();

  const { top, left } = getUiSelectListboxPosition(parentRect, portalRect);

  const [listboxPosition, setListboxPosition] = useState({
    top,
    left,
    width: parentRect?.width,
  });

  const listboxStyle = {
    width: parentRect ? `${listboxPosition.width}px` : "auto",
    left: `${listboxPosition.left}px`,
    top: `${listboxPosition.top}px`,
    visibility: isListboxOpen ? "visible" : "hidden",
  };

  useWindowResize({
    callback: () => setListboxPosition({ top, left, width: parentRect?.width }),
    timeout: 10,
  });

  return {
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
    onSelectOption,
    onFocusOption,
    listboxStyle,
  };
};
