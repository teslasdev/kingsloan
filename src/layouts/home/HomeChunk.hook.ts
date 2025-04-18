import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { updateApplication, updateReferee } from "../../slice/loanApplicationSlice";
import { InputChangePayload } from "../../utils/types/index.types";

export const useHomeChunk = () => {
  const [step, setStep] = useState(0);
  const dispatch = useAppDispatch();
  const application = useAppSelector((state) => state.loanApplication);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { field, value } = e as unknown as InputChangePayload;
    dispatch(updateApplication({ [field]: value }));
  };

  const handleRefereeChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { field, value } = e as unknown as InputChangePayload;
    dispatch(updateReferee({ index, data: { [field]: value } }));
  };
  console.log("application", application);
  return {
    step,
    setStep,
    handleChange,
    handleRefereeChange,
    application
  };
};
