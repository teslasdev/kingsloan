import { ReactNode } from "react";
import { InputProps } from "./__base__/Inputs.types";

export type TextInputProps = InputProps & {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  setUnits?: any;
};
