import { z } from "zod";
import { useForm } from "../../../../utils/hooks/useForm.hook";
import { ListItem } from "../../../../utils/types/index.types";

export const useStepThreeChunk = (props : any) => {
  
  const relationshipOptions: ListItem[] = [
    { id: "family_member", name: 'Family Member' },
    { id: "friend", name: 'Friend' },
    { id: "colleague", name: 'Colleague' },
    { id: "supervisor", name: 'Supervisor/Manager' },
    { id: "professor", name: 'Professor' },
    { id: "mentor", name: 'Mentor' },
    { id: "landlord", name: 'Landlord' },
    { id: "coworker", name: 'Coworker' },
    { id: "neighbor", name: 'Neighbor' },
    { id: "other", name: 'Other' }
  ];
  const form = useForm({
    initialFormData: {
      emailAddress: "",
      phoneNumber: "",
      houseNumber: "",
      fullAddress: "",
      referee1firstName: "",
      referee1lastName : "",
      referee1PhoneNumber: "",
      referee1Relationship: "",
      referee2firstName: "",
      referee2lastName : "",
      referee2PhoneNumber: "",
      referee2Relationship: "",
    },
    validationSchema: z.object({
      emailAddress: z.string().email("Invalid email address"),
      phoneNumber: z.string().min(10, "Phone number must be at least 10 characters"),
      houseNumber: z.string().nonempty("House number is required"),
      fullAddress: z.string().nonempty("Full address is required"),
      referee1firstName: z.string().nonempty("Referee 1 first name is required"),
      referee1lastName: z.string().nonempty("Referee 1 last name is required"),
      referee1PhoneNumber: z.string().min(10, "Referee 1 phone number must be at least 10 characters"),
      referee1Relationship: z.string().nonempty("Referee 1 relationship is required"),
      referee2firstName: z.string().nonempty("Referee 2 first name is required"),
      referee2lastName: z.string().nonempty("Referee 2 last name is required"),
      referee2PhoneNumber: z.string().min(10, "Referee 2 phone number must be at least 10 characters"),
      referee2Relationship: z.string().nonempty("Referee 2 relationship is required"),
    }),
    async onSubmit(formData) {
      console.log(formData);
      props.p.setStep(props.p.step + 1)
    },
  });

  const handlePrevious = () => {
    props.p.setStep(props.p.step - 1)
  }
  
  return {
   form,
    handlePrevious,
    relationshipOptions
  };
};
