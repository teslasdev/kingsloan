import { ReactNode } from "react";

export type PartialRequired<T, K extends keyof T> = T & {
  [P in K]-?: T[P];
};

export type ArrayElement<ArrType> =
  ArrType extends readonly (infer ElementType)[] ? ElementType : never;

export type InputChangePayload = {
  field: string;
  value: string;
};

export type ListItem = {
  id: string;
  name: string;
  rate?: number;
  cycle?: string;
  description?: string;
  icon?: ReactNode;
  iconTwo?: ReactNode;
  iconThree?: ReactNode;
  accessRevoke?: string;
  action?: VoidFunction;
  image?: string;
  component?(): ReactNode;
  subMenu?: subMenuItem[];
};

export type subMenuItem = {
  menuItemOne: {
    id: string;
    subName: string;
    icon: ReactNode;
  },
  menuItemTwo: {
    id: string;
    subName: string;
    icon: ReactNode;
  },
  menuItemThree: {
    id: string;
    subName: string;
    icon: ReactNode;
  }
}

