import { z } from "zod";
import { useForm } from "../../../../utils/hooks/useForm.hook";

export const useStepOneChunk = () => {
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
    { id: "duration-3", name: "3 months" },
    { id: "duration-6", name: "6 months" },
    { id: "duration-12", name: "12 months" },
    { id: "duration-24", name: "24 months" },
    { id: "duration-36", name: "36 months" },
    { id: "duration-48", name: "48 months" },
    { id: "duration-60", name: "60 months" },
  ];

  const form = useForm({
    initialFormData: {
      loanAmount: "",
      loanPurpose: "",
      duration: "",
    },
    validationSchema: z.object({
      loanAmount: z.string().min(1, { message: "Loan amount is required" }),
      loanPurpose: z.string().min(1, { message: "Loan purpose is required" }),
      duration: z.string().min(1, { message: "Duration is required" }),
    }),
    async onSubmit(formData) {
      console.log(formData);
    },
  });

  const isFormEmpty = Object.values(form.formData).every(value => value === "");

  const calcInt = (10 * Number(form.formData.loanAmount)) / 100;

  const repaymentAmount = Number(form.formData.loanAmount) + calcInt;
  return {
    loanPurposeOptions,
    loanDurationOptions,
    form,
    isFormEmpty,
    calcInt,
    repaymentAmount
  };
};
