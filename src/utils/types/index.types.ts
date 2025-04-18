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



// src/features/loanApplication/types.ts
export type Gender = 'male' | 'female' | 'other';


export interface Referee {
  name: string;
  relationship: string;
  phoneNumber: string;
  email: string;
}

export interface LoanApplicationState {
  loanAmount: number;
  loanPurpose: string;
  durationInMonths: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: Gender;
  maritalStatus: string;
  idType: string;
  documentId: string;
  email: string;
  phoneNumber: string;
  addressNumber: string;
  fullAddress: string;
  referees: Referee[];
  employmentStatus: string;
  companyName: string;
  businessName: string;
  role: string;
  workEmail: string;
  bvn: string;
  accountNumber: string;
  bankName: string;
}

export type UpdateRefereePayload = {
  index: number;
  data: Partial<Referee>;
};

export type UpdateApplicationPayload = Partial<LoanApplicationState>;