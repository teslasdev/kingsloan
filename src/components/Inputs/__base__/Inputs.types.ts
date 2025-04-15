import { InputHTMLAttributes, ReactNode } from "react";

import { ZodSchema } from "zod";
import { InputChangePayload, PartialRequired } from "../../../utils/types/index.types";

export type InputProps<E = HTMLInputElement> = PartialRequired<
  Omit<InputHTMLAttributes<E>, "className" | "onChange"> & {
    label: ReactNode;
    onChange: (payload: InputChangePayload) => void;
    validationTrigger?: string | null;
    validation?: ZodSchema;
    onIconLeftClick?: VoidFunction;
  },
  "name" | "value"
>;
