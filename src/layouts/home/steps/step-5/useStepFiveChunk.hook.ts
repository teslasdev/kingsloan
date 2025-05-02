import { z } from "zod";
import { useForm } from "../../../../utils/hooks/useForm.hook";
import { ListItem } from "../../../../utils/types/index.types";
import { useState } from "react";
import axios from "axios";
import { AlertProps } from "../../../../components/alerts/Alert";

export const useStepFiveChunk = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<AlertProps>({
    type: "pending",
    message: "",
    title: "",
    visible: false,
  });
  const nigeriaBankOptions: ListItem[] = [
    { id: "access_bank", name: "Access Bank" },
    { id: "citibank", name: "Citibank Nigeria" },
    { id: "ecobank", name: "Ecobank Nigeria" },
    { id: "fidelity_bank", name: "Fidelity Bank" },
    { id: "first_bank", name: "First Bank of Nigeria" },
    { id: "first_city", name: "First City Monument Bank (FCMB)" },
    { id: "gtbank", name: "Guaranty Trust Bank (GTBank)" },
    { id: "heritage_bank", name: "Heritage Bank" },
    { id: "keystone_bank", name: "Keystone Bank" },
    { id: "polaris_bank", name: "Polaris Bank" },
    { id: "providus_bank", name: "Providus Bank" },
    { id: "stanbic_ibtc", name: "Stanbic IBTC Bank" },
    { id: "standard_chartered", name: "Standard Chartered Bank Nigeria" },
    { id: "sterling_bank", name: "Sterling Bank" },
    { id: "suntrust_bank", name: "Suntrust Bank" },
    { id: "union_bank", name: "Union Bank of Nigeria" },
    { id: "uba", name: "United Bank for Africa (UBA)" },
    { id: "unity_bank", name: "Unity Bank" },
    { id: "wema_bank", name: "Wema Bank" },
    { id: "zenith_bank", name: "Zenith Bank" },
    { id: "globus_bank", name: "Globus Bank" },
    { id: "titan_trust", name: "Titan Trust Bank" },
    { id: "jaiz_bank", name: "Jaiz Bank (Islamic Bank)" },
    { id: "other", name: "Other Bank" },
  ];

  const form = useForm({
    initialFormData: {
      bvn: props.p.application.bvn || "",
      bankName: props.p.application.bankName || "",
      accountNumber: props.p.application.accountNumber || "",
      acceptTerms: true,
    },
    validationSchema: z.object({
      bvn: z.string().nonempty("BVN is required"),
      bankName: z.string().nonempty("Bank name is required"),
      accountNumber: z.string().nonempty("Account number is required"),
      acceptTerms: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions",
      }),
    }),
    async onSubmit(formData) {
      setIsLoading(true);

      try {
        console.log("Submitting:", formData);

        // Simulate API call with Axios
        const response = await axios.post(
          "https://loan-api.umetech.io/api/loan/apply",
          props.p.application,
          {
            onUploadProgress: (progressEvent) => {
              // You can use this to show actual upload progress if needed
              const progress = progressEvent.total
                ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
                : 0;
              console.log(`Upload progress: ${progress}%`);
            },
          }
        );

        setMessage({
          type: "success",
          message: response.data.message,
          title: "Success",
          visible: true,
        });

        window.location.href = "/status/"+response.data.data.loanId;
      } catch (error) {
        console.error("Submission failed:", error);
        setMessage({
          type: "error",
          message: "An error occurred while submitting the form.",
          title: "Error",
          visible: true,
        });
      } finally {
        setIsLoading(false);
      }
    },
  });

  console.log(form.formData);
  console.log(form.validationError);
  const handlePrevious = () => {
    props.p.setStep(props.p.step - 1);
  };

  return {
    form,
    handlePrevious,
    nigeriaBankOptions,
    isLoading,
    message,
  };
};
