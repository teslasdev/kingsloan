import { z } from "zod";
import { useForm } from "../../../../utils/hooks/useForm.hook";
import { ListItem } from "../../../../utils/types/index.types";

export const useStepFourChunk = (props: any) => {
  const jobApplicationStatusOptions: ListItem[] = [
    { id: "employed_seeking", name: "Employed (Seeking New Opportunities)" },
    { id: "employed_not_seeking", name: "Employed (Not Seeking)" },
    { id: "unemployed_seeking", name: "Unemployed (Actively Seeking)" },
    { id: "unemployed_not_seeking", name: "Unemployed (Not Seeking)" },
    { id: "student_seeking", name: "Student (Seeking Employment)" },
    { id: "returning_workforce", name: "Returning to Workforce" },
  ];
  const form = useForm({
    initialFormData: {
      employmentStatus: "",
      companyName: "",
      businessName: "",
      role: "",
      workEmail: "",
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
