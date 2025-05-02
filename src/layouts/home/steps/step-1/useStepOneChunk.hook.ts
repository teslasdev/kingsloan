import { z } from "zod";
import { useForm } from "../../../../utils/hooks/useForm.hook";
import { useState } from "react";

export const useStepOneChunk = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const loanPurposeOptions = [
    {
      id: "purpose-debt",

      name: "Debt Consolidation",
    },
    {
      id: "purpose-home",
      name: "Home Improvement",
    },
    {
      id: "purpose-business",
      name: "Business Investment",
    },
    {
      id: "purpose-education",
      name: "Education",
    },
    {
      id: "purpose-medical",

      name: "Medical Expenses",
    },
    {
      id: "purpose-vehicle",

      name: "Vehicle Purchase",
    },
    {
      id: "purpose-wedding",

      name: "Wedding",
    },
    { id: "purpose-travel", name: "Travel" },
    { id: "purpose-other", name: "Other" },
  ];

  const loanDurationOptions = [
    { id: "3", name: "3 months" },
    { id: "6", name: "6 months" },
    { id: "12", name: "12 months" },
    { id: "24", name: "24 months" },
    { id: "36", name: "36 months" },
    { id: "48", name: "48 months" },
    { id: "60", name: "60 months" },
  ];

  const form = useForm({
    initialFormData: {
      loanAmount: props.p.application.loanAmount || "",
      loanPurpose: props.p.application.loanPurpose || "",
      durationInMonths: props.p.application.durationInMonths || "",
    },
    validationSchema: z.object({
      loanAmount: z.string().min(1, { message: "Loan amount is required" }),
      loanPurpose: z.string().min(1, { message: "Loan purpose is required" }),
      durationInMonths: z.string().min(1, { message: "Duration is required" }),
    }),
    async onSubmit(formData) {
      setIsLoading(true);
      console.log(formData);
      props.p.setStep(props.p.step + 1);
    },
  });

  const handlePrevious = () => {
    props.p.setStep(props.p.step - 1);
  };

  const isFormEmpty = Object.values(form.formData).every(
    (value) => value === ""
  );

  const calcInt = (10 * Number(form.formData.loanAmount)) / 100;

  const repaymentAmount = Number(form.formData.loanAmount) + calcInt;
  return {
    loanPurposeOptions,
    loanDurationOptions,
    form,
    isFormEmpty,
    calcInt,
    repaymentAmount,
    handlePrevious,
    isLoading,
  };
};
