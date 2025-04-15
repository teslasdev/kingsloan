import { useState } from "react";

export const useHomeChunk = () => {
  const [step, setStep] = useState(0);
  return {
    step,
    setStep,
  };
};
