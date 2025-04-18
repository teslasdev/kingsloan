// src/features/loanApplication/loanApplicationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoanApplicationState, UpdateApplicationPayload, UpdateRefereePayload } from '../utils/types/index.types';


const initialState: LoanApplicationState = {
  loanAmount: 0,
  loanPurpose: "",
  durationInMonths: 0,
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "male",
  maritalStatus: "single",
  idType: "nin",
  documentId: "",
  email: "",
  phoneNumber: "",
  addressNumber: "",
  fullAddress: "",
  referees: [
    {
      name: "",
      relationship: "",
      phoneNumber: "",
      email: ""
    },
    {
      name: "",
      relationship: "",
      phoneNumber: "",
      email: ""
    }
  ],
  employmentStatus: "employed",
  companyName: "",
  businessName: "",
  role: "",
  workEmail: "",
  bvn: "",
  accountNumber: "",
  bankName: ""
};

const loanApplicationSlice = createSlice({
  name: 'loanApplication',
  initialState,
  reducers: {
    updateApplication: (state, action: PayloadAction<UpdateApplicationPayload>) => {
      return { ...state, ...action.payload };
    },
    updateReferee: (state, action: PayloadAction<UpdateRefereePayload>) => {
      const { index, data } = action.payload;
      state.referees[index] = { ...state.referees[index], ...data };
    },
    resetApplication: () => initialState,
  },
});

export const { updateApplication, updateReferee, resetApplication } = loanApplicationSlice.actions;
export default loanApplicationSlice.reducer;