import { z } from "zod";
import { useForm } from "../../../../utils/hooks/useForm.hook";
import { ListItem } from "../../../../utils/types/index.types";

export const useStepFiveChunk = (props: any) => {
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
    { id: "other", name: "Other Bank" }
  ];
  const form = useForm({
    initialFormData: {
      bvn: "",
      bankName: "",
      accountNumber: "",
      accountName: "",
      acceptTerms: false,
    },
    validationSchema: z.object({
      bvn: z.string().nonempty("BVN is required"),
      bankName: z.string().nonempty("Bank name is required"),
      accountNumber: z.string().nonempty("Account number is required"),
      accountName: z.string().nonempty("Account name is required"),
      acceptTerms: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions",
      }),
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
    nigeriaBankOptions,
  };
};
