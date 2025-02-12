import { InputHTMLAttributes } from "react";

type HTMLInputProps = InputHTMLAttributes<HTMLInputElement>;

export interface UiInputProps extends HTMLInputProps {
  className?: string;
}
