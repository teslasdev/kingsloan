import { z } from "zod";
import { useForm } from "../../../../utils/hooks/useForm.hook";
import { ListItem } from "../../../../utils/types/index.types";

export const useStepFourChunk = (props: any) => {
  const jobApplicationStatusOptions: ListItem[] = [
    { id: "employed", name: "Employed" },
    { id: "self_employed", name: "Self Employed" },
    { id: "unemployed", name: "Unemployed" },
    { id: "student", name: "Student" },
    { id: "retired", name: "Retired" },
  ];
  const form = useForm({
    initialFormData: {
      employmentStatus: props.p.application.employmentStatus || "",
      companyName: props.p.application.companyName || "",
      businessName: props.p.application.businessName || "",
      role: props.p.application.role || "",
      workEmail: props.p.application.workEmail || "",
    },
    validationSchema: z.object({
      employmentStatus: z.string().nonempty("Employment status is required"),
      companyName: z.string().nonempty("Company name is required"),
      businessName: z.string().nonempty("Business name is required"),
      role: z.string().nonempty("Position is required"),
      workEmail: z.string().email("Invalid work email address"),
    }),
    async onSubmit(formData) {
      console.log(formData);
      props.p.setStep(props.p.step + 1);
    },
  });

  const handlePrevious = () => {
    props.p.setStep(props.p.step - 1);
  };

  return {
    form,
    handlePrevious,
    jobApplicationStatusOptions,
  };
};
