import { z } from "zod";
import { useForm } from "../../../../utils/hooks/useForm.hook";
import { ListItem } from "../../../../utils/types/index.types";
import { useEffect } from "react";

export const useStepTwoChunk = (props: any) => {
  const dayOptions: ListItem[] = Array.from({ length: 31 }, (_, i) => ({
    id: (i + 1).toString(), // Day number as string ID (1-31)
    name: (i + 1).toString(), // Day as string name
  }));

  const monthOptions: ListItem[] = Array.from({ length: 12 }, (_, i) => ({
    id: (i + 1).toString(),
    name: new Date(0, i).toLocaleString("default", { month: "long" }),
  }));

  const currentYear = new Date().getFullYear();

  const startYear = 1879;

  const yearOptions: ListItem[] = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => ({
      id: (currentYear - i).toString(),
      name: (currentYear - i).toString(),
    })
  );
  const genderOptions: ListItem[] = [
    {
      id: "male",
      name: "Male",
    },
    {
      id: "female",
      name: "Female",
    },
  ];

  const maritalStatusOptions: ListItem[] = [
    { id: "single", name: "Single" },
    { id: "married", name: "Married" },
    { id: "divorced", name: "Divorced" },
    { id: "widowed", name: "Widowed" },
    { id: "seperated", name: "Separated" },
    { id: "domestic_parternship", name: "Domestic Partnership" },
  ];

  const identificationOptions: ListItem[] = [
    { id: "international_passport", name: "International Passport" },
    { id: "voters_card", name: "Voter ID Card" },
    { id: "nin", name: "NIN (National Identification Number)" },
  ];

  const form = useForm({
    initialFormData: {
      firstName: "",
      lastName: "",
      dayOfBirth: "",
      monthOfBirth: "",
      yearOfBirth: "",
      gender: "",
      maritalStatus: "",
      idType: "",
      documentId: "",
    },
    validationSchema: z.object({
      firstName: z.string().min(1, { message: "First name is required" }),
      lastName: z.string().min(1, { message: "Last name is required" }),
      dayOfBirth: z.string().min(1, { message: "Day of birth is required" }),
      monthOfBirth: z
        .string()
        .min(1, { message: "Month of birth is required" }),
      yearOfBirth: z.string().min(1, { message: "Year of birth is required" }),
      gender: z.string(),
      maritalStatus: z.string(),
      idType: z.string(),
      documentId: z.string().min(1, { message: "Document ID is required" }),
    }),
    async onSubmit(formData) {
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

  useEffect(() => {
    const value = form.formData;
    if (value.dayOfBirth && value.monthOfBirth && value.yearOfBirth) {
      props.p.handleChange({
        field: "dateOfBirth",
        value: `${
          value.dayOfBirth + "-" + value.monthOfBirth + "-" + value.yearOfBirth
        }`,
      });
    }
  }, [form.formData]);
  return {
    dayOptions,
    monthOptions,
    yearOptions,
    form,
    isFormEmpty,
    genderOptions,
    maritalStatusOptions,
    identificationOptions,
    handlePrevious,
  };
};
