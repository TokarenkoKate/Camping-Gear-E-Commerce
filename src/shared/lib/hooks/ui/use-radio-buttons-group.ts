import { useRef, useState } from "react";

export const useRadioButtonsGroup = (value?: string) => {
  const groupRef = useRef<HTMLUListElement>(null);
  const [selectedOptionValue, setSelectedOptionValue] = useState<string | null>(
    value || null
  );

  const onSelectRadioOption = (value: string) => {
    setSelectedOptionValue(value);
  };

  return { selectedOptionValue, groupRef, onSelectRadioOption };
};
