// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import loanApplicationReducer from '../slice/loanApplicationSlice';

export const store = configureStore({
  reducer: {
    loanApplication: loanApplicationReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;